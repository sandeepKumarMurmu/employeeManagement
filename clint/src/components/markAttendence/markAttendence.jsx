// importing css file
import "./markAttendence.css";

//importing from library
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

// importing components
import { ActionCreators } from "../state/store/index";

export const MarkAttendecne = () => {
  const dispatch = useDispatch();
  const { TrackLogin } = bindActionCreators(ActionCreators, dispatch);

  const nav = useNavigate();
  const [employee, setEmployee] = useState({
    isEmployee: false,
    selected: false,
  });
  return (
    <div className="mainContainer heightCheck">
      {/* condition button */}
      <div className="buttonContainer">
        <button
          className="btn btn-success "
          onClick={() => {
            setEmployee({
              isEmployee: true,
              selected: true,
            });
          }}
        >
          Mark Attendence
        </button>
        <h3>OR</h3>
        <button
          className="btn btn-danger "
          onClick={() => {
            setEmployee({
              isEmployee: false,
              selected: true,
            });
          }}
        >
          Login as Admin
        </button>
      </div>
      {/* login / welcom dilog */}
      <div className="login">
        {employee.selected ? (
          <>
            <div className="titleContainer">
              <h4>
                {employee.isEmployee ? "Mark Attendence" : "Login as Admin"}
              </h4>
            </div>
            <div className="formContainer_login">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (employee.isEmployee) {
                    alert("your attendence is marked");
                    window.location.reload();
                  } else {
                    nav("/home");
                    TrackLogin({ ...employee });
                  }
                }}
              >
                <div className="mb-3">
                  <label forhtml="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text extension">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label forhtml="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                {!employee.isEmployee && (
                  <div className="mb-3">
                    <label forhtml="uniqueCode" className="form-label">
                      Admin Unique Code
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="uniqueCode"
                    />
                  </div>
                )}

                {/* submit button */}
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="titleContainer">
            <h4>Welcom Please Select Above Option</h4>
          </div>
        )}
      </div>
    </div>
  );
};
