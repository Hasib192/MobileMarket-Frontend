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
    console.log(response);
    if (response.data.status === "success") {
      toast.success("Registration Successful");
      return true;
    } else {
      toast.success("User already registered");
      return false;
    }
  } catch (error) {
    toast.error("Registration Failed");
    console.error(error.message);
    return false;
  }
}
