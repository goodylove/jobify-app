import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';

import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/StatsContainer';
import { toast } from 'react-toastify';
import { StatsItems } from '../components';



export const loader = async ()=>{
  try {
    const response =  await customFetch.get('/users/admin/app-stats')
    return response.data
    
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    toast.error("You are not authorized to  view this page")
    return redirect('/dashboard')
    
  }
}
function Admin() {
  const { user,jobs} = useLoaderData()
  return (
    <Wrapper>
    <StatsItems
    title="current users"
    count={user}
    color='#e9b949'
    bcg='#fcefc7'
    icon={<FaSuitcaseRolling/>}
    />
  

  <StatsItems
    title="total jobs"
    count={jobs}
    color='#647acb'
    bcg='#e0e8f9'
    icon={<FaCalendarCheck/>}
    />

    </Wrapper>
  )
}

export default Admin
