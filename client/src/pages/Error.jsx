import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from "../assets/images/not-found.svg"

function Error() {
  const error = useRouteError()

  if(error.status === 404) {
  return (
    <Wrapper>
      <img src={img} alt="not" />
      <h3>Ohh! page not found</h3>
      <p>We cant seems to find the page  your are looking for</p>

      <Link to="/dashboard">Back Home</Link>
    </Wrapper>
  )
}

 return (
    <Wrapper>

     <h1>Something went wrong</h1>
      <Link to="/">Back Home</Link>
    </Wrapper>
  )
}

export default Error
