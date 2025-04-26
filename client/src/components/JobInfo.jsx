
import Wrapper from "../assets/wrappers/JobInfo";
// eslint-disable-next-line react/prop-types
function JobInfo({icon,text}) {


  return <Wrapper>
    <span className="job-icon">{icon}</span>
    <span className="job-text">{text}</span>
  </Wrapper>;
}

export default JobInfo;
