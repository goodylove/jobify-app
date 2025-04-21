
import { Link,useNavigation,redirect, Form } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { FormRow, Logo } from "../components"



export  const action = async(data)=>{
  console.log(data)
  return null
}
function Register() {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo/>
        <h4>Register</h4>
       <FormRow type="text" labelText="First Name" name="firstName" defaultValue="Goody"/>
       <FormRow type="text" labelText="Last Name" name="lastName" defaultValue="Chiwe"/>
       <FormRow type="text" labelText="Location" name="location" defaultValue="Lagos"/>
       <FormRow type="text" labelText="Email" name="email" defaultValue="goodyc474@gmail.com"/>
       <FormRow type="password" labelText="Password" name="password" defaultValue="Goody"/>
          <button  type="submit" className="btn btn-block">Submit</button>
          <p>Already a member? <Link to="/login" className="member-btn">Login</Link></p>
      </Form>
    </Wrapper>
  )
}

export default Register
