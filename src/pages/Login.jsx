import { Link } from "react-router-dom";
import styles from "./Form.module.css";

const Login = () => {
  return (
    <div className={styles.center}>
      <form className={styles.form}>
        <h1 className={styles.heading}> Login </h1>
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input type="email" className={styles.input} id="mail" name="user_email" />
        <label htmlFor="password" className={styles.label}>
          Password:
        </label>
        <input type="password" className={styles.input} id="password" name="user_password" />

        <button type="submit" className={styles.button}>
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
