// importing css file
import "./registration.css";

//importing important datas
import { States, Branch } from "../importantData";

// importing from library
import axios from "axios";
import { useState } from "react";

// importing main render function
export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    profile_image: "",
    admin: "",
    payScale: "",
    city: "",
    state: "",
    zipcode: "",
    branch: "",
  });

  // handel form
  function handelFormData(e) {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  }
  // handel submit
  function handelSubmit() {
    axios.post("http://localhost:8080/newemployee", formData).then((res) => {
      console.log(res);
    });
  }
  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <h1>Registration form</h1>
      </div>
      <div className="formContainer">
        <div className="registrationForm ">
          <form
            className="row g-3 justify-content-center d-flex"
            onSubmit={(e) => {
              e.preventDefault();
              handelSubmit();
            }}
          >
            {/* first name */}
            <div className="col-md-4">
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <input
                onChange={(e) => {
                  handelFormData(e);
                }}
                type="text"
                className="form-control"
                id="firstName"
                required
              />
            </div>
            {/* last name */}
            <div className="col-md-4">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input
                onChange={(e) => {
                  handelFormData(e);
                }}
                type="text"
                className="form-control"
                id="lastName"
                required
              />
            </div>

            {/* profile image */}
            <div className="col-md-4">
              <label htmlFor="profile_image" className="form-label">
                Profile image <span className="extension">( url )</span>
              </label>
              <input
                onChange={(e) => {
                  handelFormData(e);
                }}
                type="url"
                className="form-control"
                id="profile_image"
              />
            </div>
            {/* employee type */}
            <div className="col-md-3">
              <label htmlFor="admin" className="form-label">
                Employee type
              </label>
              <select
                className="form-select"
                id="admin"
                required
                onChange={(e) => {
                  handelFormData(e);
                }}
              >
                <option selected disabled value={""}>
                  Choose...
                </option>
                <option value={false}>worker</option>
                <option value={true}>Admin</option>
              </select>
            </div>
            {/* salary */}
            <div className="col-md-4">
              <label htmlFor="payScale" className="form-label">
                Pay scale
              </label>
              <input
                onChange={(e) => {
                  handelFormData(e);
                }}
                type="Number"
                className="form-control"
                id="payScale"
                required
              />
            </div>
            {/* city */}
            <div className="col-md-6">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                onChange={(e) => {
                  handelFormData(e);
                }}
                type="text"
                className="form-control"
                id="city"
                required
              />
            </div>
            {/* state */}
            <div className="col-md-3">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <select
                className="form-select"
                id="state"
                required
                onChange={(e) => {
                  handelFormData(e);
                }}
              >
                <option selected disabled value={""}>
                  Choose...
                </option>

                {States.map((ele, i) => (
                  <option key={"state" + i} value={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>
            {/* zip code */}
            <div className="col-md-3">
              <label htmlFor="zipcode" className="form-label">
                Zip
              </label>
              <input
                onChange={(e) => {
                  handelFormData(e);
                }}
                type="Number"
                className="form-control"
                id="zipcode"
                maxLength={6}
                minLength={6}
                required
              />
            </div>
            {/* branch */}
            <div className="col-md-3">
              <label htmlFor="branch" className="form-label">
                Branch
              </label>
              <select
                className="form-select"
                id="branch"
                required
                onChange={(e) => {
                  handelFormData(e);
                }}
              >
                <option selected disabled value={""}>
                  Choose...
                </option>
                {Branch.map((ele, i) => (
                  <option key={"branch" + i} value={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-12 buttonUser">
              <button className="btn btn-success" type="submit">
                Create
              </button>
              <button className="btn btn-danger" type="submit">
                Discard
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
