import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";
import { Create_New_USER_API } from "../apiServices/ApiServices";
import styles from "./Form.module.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { name, email, password } = formData;

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (validator.isEmpty(name)) {
      toast.error("Name required");
    } else if (validator.isEmpty(email) || !validator.isEmail(email)) {
      toast.error("Email required");
    } else if (validator.isEmpty(password)) {
      toast.error("Password required");
    } else {
      try {
        let result = await Create_New_USER_API(name, email, password);
        if (result) {
          navigate("/login");
        }
      } catch (e) {
        console.error("Registration Failed: " + e.message);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={styles.center}>
      <form className={styles.form} onSubmit={handleSignUp}>
        <h1 className={styles.heading}> Sign Up </h1>

        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input type="text" className={styles.input} name="name" value={name} onChange={handleChange} />

        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input type="email" className={styles.input} name="email" value={email} onChange={handleChange} />

        <label htmlFor="password" className={styles.label}>
          Password:
        </label>
        <input type="password" className={styles.input} name="password" value={password} onChange={handleChange} />

        <button type="submit" className={styles.button}>
          Sign Up
        </button>
        <p className={styles.paragraph}>
          Already a member? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
