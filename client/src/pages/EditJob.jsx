import { Form, redirect } from 'react-router-dom';
import { FormRow, FormRowsSelect } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useLoaderData } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constant';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import SubmitBtn from '../components/SubmitBtn';



export const loader = async ({params})=>{
  try {
    const {data} = await customFetch.get(`/jobs/${params.id}`)
    console.log(data)
    return data
    
  } catch (error) {
    toast.error(error.response.data.msg);
    return redirect('/dashboard/all-jobs');
  }
}

export const action = async ({request,params})=>{
  const formData = await request.formData()
  const data =  Object.fromEntries(formData)
  try {
    await customFetch.patch(`/jobs/${params.id}`,data)
     toast.success('Job edited successfully');
    return redirect('/dashboard/all-jobs');
    
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
    
  }
}


function EditJob() {
  const {singleJob} = useLoaderData()
  
  return (
   <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>edit job</h4>
        <div className='form-center'>
          <FormRow type='text' name='position' defaultValue={singleJob?.position} />
          <FormRow type='text' name='company' defaultValue={singleJob?.company} />
          <FormRow
            type='text'
            labelText='job location'
            name='jobLocation'
            defaultValue={singleJob?.jobLocation}
          />

          <FormRowsSelect
            name='jobStatus'
            labelText='job status'
            defaultValue={singleJob?.jobStatus}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowsSelect
            name='jobType'
            labelText='job type'
            defaultValue={singleJob?.jobType}
            list={Object.values(JOB_TYPE)}
          />
          <SubmitBtn formBtn/>
        </div>
      </Form>
    </Wrapper>
  )
}

export default EditJob
