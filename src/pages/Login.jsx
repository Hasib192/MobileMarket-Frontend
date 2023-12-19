import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";
import { Login_USER_API } from "../apiServices/ApiServices";
import styles from "./Form.module.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  const { email, password } = formData;

  const handleLogin = async (e) => {
    e.preventDefault();
    setDisable(true);
    if (validator.isEmpty(email) || !validator.isEmail(email)) {
      toast.error("Email required");
    } else if (validator.isEmpty(password)) {
      toast.error("Password required");
    } else {
      try {
        let result = await Login_USER_API(email, password);
        if (result) {
          navigate("/");
        }
      } catch (e) {
        console.error("Login failed: " + e.message);
      }
    }
    setDisable(false);
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
      <form className={styles.form} onSubmit={handleLogin}>
        <h1 className={styles.heading}> Login </h1>

        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input type="email" className={styles.input} name="email" value={email} onChange={handleChange} />

        <label htmlFor="password" className={styles.label}>
          Password:
        </label>
        <input type="password" className={styles.input} name="password" value={password} onChange={handleChange} />

        <button type="submit" className={styles.button} disabled={disable}>
          Login
        </button>
        <p className={styles.paragraph}>
          New member? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
