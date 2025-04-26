
import { FormRow, FormRowsSelect } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constant';
import { Form, useNavigation, redirect,useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';


export const action = async({request})=>{
  const formData = await request.formData()
  const data =  Object.fromEntries(formData)
  try {
    await customFetch.post('/jobs',data)
    toast.success('Job created successfully')
     return redirect('all-jobs')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
    
  }

}
function AddJob() {
  const { user} =   useOutletContext();
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"
  return (
   <Wrapper>
    <Form method='post' className='form'>
      <h4 className='form-title'> add job</h4>
      <div className="form-center">
        <FormRow type='text' name="position" labelText="Position"/>
        <FormRow type='text' name="company"/>
        <FormRow type='text' name="jobLocation" labelText='job location' defaultValue={user?.location}/>
        <FormRowsSelect name="jobType" labelText="job type" list={Object.values(JOB_TYPE)} defaultValue={JOB_TYPE.FULL_TIME} />
        <FormRowsSelect name="jobStatus" labelText="job status" list={Object.values(JOB_STATUS)} defaultValue={JOB_STATUS.PENDING} />
         
        <button type='submit' className='btn btn-block form-btn' disabled={isSubmitting}>{isSubmitting ? "submitting":"submit"}</button>
      </div>

    </Form>
   </Wrapper>
  )
}

export default AddJob
