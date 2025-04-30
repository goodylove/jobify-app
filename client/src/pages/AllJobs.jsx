import {  useLoaderData } from 'react-router-dom'
import { JobContainer, SearchContainer } from '../components'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'
import { createContext, useContext } from 'react'


export const loader =  async({request})=>{
  const params = Object.fromEntries([
    ... new URL(request.url).searchParams.entries()
  ])
  try {
    
    const {data} =  await customFetch.get('/jobs',{
      params
    }    )
    return {data,searchValues:{...params}}
      
    
    
    // eslint-disable-next-line no-unused-vars
   } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
    
  }
}
const allJobContext =  createContext()

const AllJobs = () => {
  const{ data,searchValues }= useLoaderData()
  return (
    <allJobContext.Provider value={{data, searchValues}}>
      <SearchContainer/>
      <JobContainer/>

    </allJobContext.Provider>
  )
}

export const useAllJobsContext = ()=> useContext(allJobContext)

export default AllJobs
