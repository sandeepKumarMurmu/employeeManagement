import "./registration.css";

//importing important datas
import { States, Branch } from "../importantData";
export const RegistrationForm = () => {
  return (
    <div className="registrationForm">
      <form className="row g-3">
        {/* first name */}
        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            required
          />
        </div>
        {/* last name */}
        <div className="col-md-4">
          <label htmlFor="validationDefault02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault02"
            required
          />
        </div>
        {/* user name */}
        <div className="col-md-4">
          <label htmlFor="validationDefaultUsername" className="form-label">
            Username
          </label>
          <div className="input-group">
            <span className="input-group-text" id="inputGroupPrepend2">
              @
            </span>
            <input
              type="text"
              className="form-control"
              id="validationDefaultUsername"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
        </div>
        {/* date of birth */}
        <div className="col-md-4">
          <label htmlFor="validationDefault001" className="form-label">
            date of Birth <span className="extension">( DD/MM/YYYY )</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault001"
            required
          />
        </div>
        {/* profile image */}
        <div className="col-md-4">
          <label htmlFor="validationDefault002" className="form-label">
            Profile image <span className="extension">( url )</span>
          </label>
          <input
            type="url"
            className="form-control"
            id="validationDefault002"
          />
        </div>
        {/* employee type */}
        <div className="col-md-3">
          <label htmlFor="validationDefault003" className="form-label">
            Employee type
          </label>
          <select className="form-select" id="validationDefault003" required>
            <option selected disabled value={""}>
              Choose...
            </option>
            <option value={"worker"}>worker</option>
            <option value={"admin"}>Admin</option>
          </select>
        </div>
        {/* salary */}
        <div className="col-md-4">
          <label htmlFor="validationDefault004" className="form-label">
            Pay scale
          </label>
          <input
            type="Number"
            className="form-control"
            id="validationDefault004"
            required
          />
        </div>
        {/* city */}
        <div className="col-md-6">
          <label htmlFor="validationDefault03" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault03"
            required
          />
        </div>
        {/* state */}
        <div className="col-md-3">
          <label htmlFor="validationDefault04" className="form-label">
            State
          </label>
          <select className="form-select" id="validationDefault04" required>
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
          <label htmlFor="validationDefault05" className="form-label">
            Zip
          </label>
          <input
            type="Number"
            className="form-control"
            id="validationDefault05"
            maxLength={6}
            minLength={6}
            required
          />
        </div>
        {/* branch */}
        <div className="col-md-3">
          <label htmlFor="validationDefault005" className="form-label">
            Branch
          </label>
          <select className="form-select" id="validationDefault005" required>
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
  );
};
