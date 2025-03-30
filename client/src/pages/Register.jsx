
import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { FormRow, Logo } from "../components"
function Register() {
  return (
    <Wrapper>
      <form className="form">
        <Logo/>
        <h4>Register</h4>
       <FormRow type="text" labelText="First Name" name="firstName" defaultValue="Goody"/>
       <FormRow type="text" labelText="Last Name" name="lastName" defaultValue="Chiwe"/>
       <FormRow type="text" labelText="Location" name="location" defaultValue="Lagos"/>
       <FormRow type="text" labelText="Email" name="email" defaultValue="goodyc474@gmail.com"/>
       <FormRow type="password" labelText="Password" name="password" defaultValue="Goody"/>
          <button  type="submit" className="btn btn-block">Submit</button>
          <p>Already a member? <Link to="/login" className="member-btn">Login</Link></p>
      </form>
    </Wrapper>
  )
}

export default Register
