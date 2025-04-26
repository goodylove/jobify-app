import { redirect } from "react-router-dom";
import customFetch from "./customFetch";
import { toast } from "react-toastify";

const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration was successful");
    return redirect("/login");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
  }
};

const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);

    return redirect("/dashboard");
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default { action, loginAction };
