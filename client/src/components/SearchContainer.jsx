import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, useSubmit, Link } from 'react-router-dom';
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from "../../../utils/constant"
import { useAllJobsContext } from '../pages/AllJobs';
import FormRow  from "./FormRow"
import FormRowsSelect from './FormRowsSelect';

const SearchContainer = () => {
  const { searchValues } = useAllJobsContext()
  const { search, jobStatus, jobType, sort } = searchValues 

function debounce(onChange){
  let timeout;
  return (e)=>{
const form = e.currentTarget.form
  clearTimeout(timeout)

  setTimeout(()=>{
    onChange(form)

  }, 1000)
  }
}

  const submit = useSubmit();

  return (
    <Wrapper>
      <Form className='form'>
        <h5 className='form-title'>search form</h5>
        <div className='form-center'>
          {/* search position */}

          <FormRow
            type='search'
            name='search'
            defaultValue={search}
            onChange={debounce((form)=>{
              submit(form)

            })}
          />
          <FormRowsSelect
            labelText='job status'
            name='jobStatus'
            list={['all', ...Object.values(JOB_STATUS)]}
            defaultValue={jobStatus}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowsSelect
            labelText='job type'
            name='jobType'
            defaultValue={jobType}
            list={['all', ...Object.values(JOB_TYPE)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowsSelect
            name='sort'
            defaultValue={sort}
            list={[...Object.values(JOB_SORT_BY)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Link to='/dashboard/all-jobs' className='btn form-btn delete-btn'>
            Reset Search Values
          </Link>

          {/* <SubmitBtn formBtn/> */}
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;