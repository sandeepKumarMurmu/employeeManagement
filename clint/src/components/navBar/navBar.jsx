// importing from library
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { bindActionCreators } from "redux";
// importing css file
import "./navBar.css";
import { ActionCreators } from "../state/store";

//main render function
export const NavBar = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { TrackLogin } = bindActionCreators(ActionCreators, dispatch);
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
                <Link to={"/attendence"} className="nav-link">
                  Check Attendence
                </Link>
              </li>

              <li className="nav-item">
                <p
                  className="nav-link"
                  onClick={() => {
                    TrackLogin({ isEmployee: true, selected: true });
                    nav("/");
                  }}
                >
                  logout
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
