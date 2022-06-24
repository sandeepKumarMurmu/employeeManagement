// importing css file
import "./adminHome.css";

// importing from library
import { Link } from "react-router-dom";
// main render function
export const AdminHome = () => {
  return (
    <div className="button_container_admin">
      <div className="buttonContaienr">
        <Link to="/home" className="btn btn-success">
          Create Employe
        </Link>
        <Link to="/attendence" className="btn btn-danger">
          check Attendence
        </Link>
        <Link to="/home" className="btn btn-warning">
          Update Salary
        </Link>
      </div>
    </div>
  );
};
