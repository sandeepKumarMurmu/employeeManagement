// importing css file
import "./markAttendence.css";

//importing from library
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import axios from "axios";

// importing components
import { ActionCreators } from "../state/store/index";

export const MarkAttendecne = () => {
  const dispatch = useDispatch();
  const { TrackLogin } = bindActionCreators(ActionCreators, dispatch);

  const nav = useNavigate();
  const [employee, setEmployee] = useState({
    message: "",
    isEmployee: false,
    selected: false,
  });
  const [todyAttendence, setTodayAttendence] = useState([]);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    admin_key: "",
  });

  // handel form
  function handelForm(e) {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  }

  // use effects
  useEffect(() => {
    setInterval(() => {
      const day = new Date();
      axios
        .post("http://localhost:8080/attendence", {
          date: `${day.getDate()}-${day.getMonth()}-${day.getFullYear()}`,
          list: [...todyAttendence],
        })
        .then((res) => {
          console.log(res);
        });
    }, 1000 * 60 * 60 * 24);
  }, []);

  // mark attendence
  const markAttendenc = (data) => {
    axios
      .post("http://localhost:8080/login", data)
      .then(({ data }) => {
        alert(data.message);
        setEmployee({
          message: "",
          isEmployee: false,
          selected: false,
        });

        setTodayAttendence([...todyAttendence, data._id]);
      })
      .catch(({ response }) => {
        alert(response.data.message);
      });
    document.getElementById("userName").value = "";
    document.getElementById("password").value = "";
    setFormData({ userName: "", password: "", admin_key: "" });
  };
  // handel admin
  const handelAdmin = (data) => {
    // axios
    //   .post("http://localhost:8080/login", data)
    //   .then(({ data }) => {
    //     alert(data.message);
    //     setEmployee({
    //       message: "",
    //       isEmployee: false,
    //       selected: false,
    //     });

    //     document.getElementById("admin_key").innerHTML = "";
    //     setTodayAttendence([...todyAttendence, data._id]);
    //     TrackLogin({ ...employee });
    //     nav("/");
    //   })
    //   .catch(({ response }) => {
    //     alert(response.data.message);
    //   });

    setEmployee({
      message: "",
      isEmployee: false,
      selected: false,
    });

    // document.getElementById("admin_key").innerHTML = "";
    // setTodayAttendence([...todyAttendence, data._id]);
    TrackLogin({ ...employee });
    nav("/");
    // document.getElementById("userName").value = "";
    // document.getElementById("password").value = "";
    setFormData({ userName: "", password: "", admin_key: "" });
  };
  return (
    <div className="mainContainer heightCheck">
      {/* condition button */}
      <div className="buttonContainer">
        <button
          className="btn btn-success "
          onClick={() => {
            setEmployee({
              message: "Mark Attendence",
              isEmployee: true,
              selected: true,
            });
          }}
        >
          Mark Attendence
        </button>

        <button
          className="btn btn-warning "
          onClick={() => {
            // setEmployee({
            //   message: "Login as Admin",
            //   isEmployee: false,
            //   selected: true,
            // });
            handelAdmin();
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
              <h4>{employee.message}</h4>
            </div>
            <div className="formContainer_login">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (employee.isEmployee) {
                    markAttendenc(formData);
                  }
                }}
              >
                {/* userName */}
                <div className="mb-3">
                  <label forhtml="userName" className="form-label">
                    user Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    aria-describedby="emailHelp"
                    onChange={(e) => {
                      handelForm(e);
                    }}
                  />
                  <div id="emailHelp" className="form-text extension">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                {/* password */}
                <div className="mb-3">
                  <label forhtml="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={(e) => {
                      handelForm(e);
                    }}
                  />
                </div>
                {/* unique key */}
                {!employee.isEmployee && (
                  <div className="mb-3">
                    <label forhtml="admin_key" className="form-label">
                      Admin Unique Code
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="admin_key"
                      onChange={(e) => {
                        handelForm(e);
                      }}
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
