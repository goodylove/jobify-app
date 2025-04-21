
import { Link, Form, useNavigation         }  from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { FormRow, Logo } from "../components"




function Register() {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"
  console.log(navigation)


  return (
    <Wrapper>
      <Form method="post"   className="form">
        <Logo/>
        <h4>Register</h4>
       <FormRow type="text" labelText="Name" name="name" defaultValue="Goody"/>
       <FormRow type="text" labelText="Last Name" name="lastName" defaultValue="Chiwendu"/>
       <FormRow type="text" labelText="Location" name="location" defaultValue="Lagos"/>
       <FormRow type="email" labelText="Email" name="email" defaultValue="goodyc474@gmail.com"/>
       <FormRow type="password" labelText="Password" name="password" defaultValue="Goodness" />
          <button  type="submit" className="btn btn-block" >submit 
             </button>
          {/* <button  type="submit" className="btn btn-block"  disabled={ isSubmitting} >{isSubmitting ?"Submiting":  "submit" }  </button> */}
          <p>Already a member? <Link to="/login" className="member-btn">Login</Link></p>
      </Form>
    </Wrapper>
  )
}

export default Register
