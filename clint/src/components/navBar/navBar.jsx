// importing from library
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// importing css file
import "./navBar.css";

//main render function
export const NavBar = () => {
  const { isEmployee } = useSelector((state) => state.TrackLogin);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top nav_user">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          TechOn
        </Link>
        {!isEmployee && (
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        )}
        {!isEmployee && (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/"}
                  color="white"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/attendence"} className="nav-link" href="#">
                  Check Attendence
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link ">Update Salary</a>
              </li>
              <li>
                <div className="dropdown">
                  <a
                    className="dropdown-toggle nav-link active"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Toggler
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Admin
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Employe
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Employee"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success "
                color="white"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
};
