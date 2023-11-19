import axios from "axios";
import { toast } from "react-toastify";

const baseURL = "http://localhost:5000/api/v1";

export async function Create_New_USER_API(name, email, password) {
  let URL = baseURL + "/register";

  let postBody = {
    name,
    email,
    password,
  };

  try {
    let response = await axios.post(URL, postBody);
    if (response.data.status === "success") {
      toast.success("Registration Successful");
      return true;
    } else if (response.data.status === "matched") {
      toast.error("User already registered");
      return false;
    } else {
      toast.error("Signup failed");
      return false;
    }
  } catch (error) {
    toast.error("Error occured! Please try again later");
    console.error(error.message);
    return false;
  }
}

export async function Login_USER_API(email, password) {
  let URL = baseURL + "/login";

  let postBody = {
    email,
    password,
  };

  try {
    let response = await axios.post(URL, postBody);
    console.log(response);
    if (response.data.status === "success") {
      toast.success(`Login Successful`);
      return true;
    } else if (response.data.status === "unauthorized") {
      toast.error("No user found");
      return false;
    } else {
      toast.error("Login failed");
      return false;
    }
  } catch (error) {
    toast.error("Error occured! Please try again later");
    console.error(error.message);
    return false;
  }
}
