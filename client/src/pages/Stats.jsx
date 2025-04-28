import {ChartContainer, StatsContainer} from "../components"
import customFetch from '../utils/customFetch'
import { useLoaderData } from 'react-router-dom'

export const loader = async()=>{
 try {
  const data =  await customFetch.get("/jobs/stats")
  return data.data

  
 } catch (error) {
  
  return error
  
 }
}

function Stats() {
  const { defaultStats, monthlyApplication} = useLoaderData()
  return (
    <>
     <StatsContainer defaultStats={defaultStats}/>
     {monthlyApplication?.length > 0 &&(
      <ChartContainer data={monthlyApplication}/>
     )}
    </>
  )
}

export default Stats
