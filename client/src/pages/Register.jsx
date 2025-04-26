
import { Link, Form, redirect, useNavigation,       }  from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { FormRow, Logo } from "../components"
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration was successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    console.log(error)
    return error
  }
};



function Register() {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"


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
          
          <button  type="submit" className="btn btn-block"  disabled={ isSubmitting} >{isSubmitting ?"Submitting":  "submit" }  </button>
          <p>Already a member? <Link to="/login" className="member-btn">Login</Link></p>
      </Form>
    </Wrapper>
  )
}

export default Register
