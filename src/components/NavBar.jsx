import { useEffect, useState } from "react";
import { Outlet, Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    setIsLoggedIn(token && token.length > 0);
  }, [location]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <header className="p-3" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container-fluid">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
              MobileMarket
            </Link>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink to="/" className="nav-link px-2 link-body-emphasis">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/view-cart" className="nav-link px-2 link-body-emphasis">
                  View Cart
                </NavLink>
              </li>
            </ul>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
            </form>
            <div className="text-end">
              {isLoggedIn ? (
                <NavLink to="/" onClick={handleLogout} className="btn btn-outlines-primary me-2">
                  Logout
                </NavLink>
              ) : (
                <>
                  <NavLink to="/login" className="btn btn-outlines-primary me-2">
                    Login
                  </NavLink>
                  <NavLink to="/signup" className="btn btn-outlines-primary">
                    Sign-up
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
