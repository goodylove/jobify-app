import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { FormRow, Logo } from "../components"
function Login() {
  return (
     <Wrapper>
      <form className="form">
        <Logo/>
        <h4>Login</h4>
       <FormRow type="email" labelText="Email" name="email" defaultValue="goodyc474@gmail.com"/>
       <FormRow type="password" labelText="Password" name="password" defaultValue="Chiwe"/>
        <button  type="submit" className="btn btn-block">Submit</button>
        <button  type="button" className="btn btn-block">Explore The App</button>
        <p>Not a member yet? <Link to="/Register" className="member-btn">Register</Link></p>
      </form>
    </Wrapper>
  )
}

export default Login
