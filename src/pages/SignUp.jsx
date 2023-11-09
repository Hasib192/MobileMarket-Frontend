import { Link } from "react-router-dom";
import styles from "./Form.module.css";

const SignUp = () => {
  return (
    <div className={styles.center}>
      <form className={styles.form}>
        <h1 className={styles.heading}> Sign Up </h1>
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input type="text" className={styles.input} id="name" name="user_name" />
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input type="email" className={styles.input} id="mail" name="user_email" />
        <label htmlFor="password" className={styles.label}>
          Password:
        </label>
        <input type="password" className={styles.input} id="password" name="user_password" />

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
