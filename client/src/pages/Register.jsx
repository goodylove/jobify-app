
import { Link, Form, redirect       }  from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { FormRow, Logo, SubmitBtn } from "../components"
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
 


  return (
    <Wrapper>
      <Form method="post"   className="form">
        <Logo/>
        <h4>Register</h4>
       <FormRow type="text" labelText="Name" name="name" />
       <FormRow type="text" labelText="Last Name" name="lastName" />
       <FormRow type="text" labelText="Location" name="location"/>
       <FormRow type="email" labelText="Email" name="email" />
       <FormRow type="password" labelText="Password" name="password" />
        <SubmitBtn/>
          
          <p>Already a member? <Link to="/login" className="member-btn">Login</Link></p>
      </Form>
    </Wrapper>
  )
}

export default Register
