import {  useLoaderData } from 'react-router-dom'
import { JobContainer, SearchContainer } from '../components'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'
import { createContext, useContext } from 'react'


export const loader =  async()=>{
  try {
    
    const {data} =  await customFetch.get('/jobs')
    return {data}
      
    
    
    // eslint-disable-next-line no-unused-vars
   } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
    
  }
}

const allJobContext =  createContext()

const AllJobs = () => {
  const{ data }= useLoaderData()
  return (
    <allJobContext.Provider value={{data}}>
      <SearchContainer/>
      <JobContainer/>

    </allJobContext.Provider>
  )
}

export const useAlljobsContext = ()=> useContext(allJobContext)

export default AllJobs
