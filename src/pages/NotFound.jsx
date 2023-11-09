import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <h2>404! Nothing to see here.</h2>
      <p>
        <Link to="/">Go to home page</Link>
      </p>
    </div>
  );
};

export default NotFound;
