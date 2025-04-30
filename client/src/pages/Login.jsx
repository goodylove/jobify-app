import { Form, Link, redirect, } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { FormRow, Logo, SubmitBtn } from "../components"
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";


export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // const errors = {msg:''}
  // if(data.password.length < 3){
  //   errors.msg = "Password is too short"
  //   // return errors
  // }
  try {
    await customFetch.post("/auth/login", data);
 toast.success("Login was successful");
    return redirect("/dashboard");
  } catch (error) {
    console.log(error);
       toast.error(error?.response?.data?.msg);
       return error
  }
};


function Login() {
   
  return (
     <Wrapper>
      <Form method="post" className="form">
        <Logo/>

        <h4>Login</h4>
       <FormRow type="email" labelText="Email" name="email" />
       <FormRow type="password" labelText="Password" name="password" />
       <SubmitBtn />
        {/* <button  type="button" className="btn btn-block">Explore The App</button> */}
        <p>Not a member yet? <Link to="/Register" className="member-btn">Register</Link></p>
      </Form>
    </Wrapper>
  )
}

export default Login
