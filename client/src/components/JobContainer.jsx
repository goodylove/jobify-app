import Job from "./Job"
import Wrapper from "../assets/wrappers/JobsContainer"
import { useAllJobsContext } from "../pages/AllJobs"
import PageBtnContainer from "./PageBtnContanier"
function JobContainer() {
    const {data} =  useAllJobsContext()
    console.log(data)
    const {jobs,numOfPage,} = data


    if(jobs.length === 0 ){
        return <Wrapper>
            <h2>No jobs to display</h2>
        </Wrapper>
    }
    
  return (
    <Wrapper>
      <div className="jobs">
        {jobs.map((job)=>{
            return <Job  key={job._id} {...job}/>
        })}
      </div>
      {numOfPage > 1 && <PageBtnContainer/>}
    </Wrapper>
  )
}

export default JobContainer
