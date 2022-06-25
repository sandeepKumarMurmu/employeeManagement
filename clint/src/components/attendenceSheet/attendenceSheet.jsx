import "./attendence.css";

// importing from library
import { useState, useEffect } from "react";
import axios from "axios";
export const AttendenceSheet = () => {
  const [attendenceData, setAttendenceData] = useState([]);
  const [date, setDate] = useState([]);
  const [label, setLabel] = useState("");
  useEffect(() => {
    axios.get("http://localhost:8080/attendence/getAll").then(({ data }) => {
      setDate([...data.data]);
    });
  }, []);

  function getSingleDay(ele) {
    // console.log(ele);
    axios
      .get(`http://localhost:8080/attendence/${ele._id}`)
      .then(({ data }) => {
        const { list } = data.data;
        setLabel(ele.date);
        setAttendenceData([...list]);
      });
  }
  return (
    <div className="attendenceSheet">
      <div className="titleContainer">
        <h1>Attendence Detail</h1>
      </div>
      <div className="container_dd">
        <h5>{label === "" ? "Date : --/--/----" : "Date : " + label}</h5>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul
            className="dropdown-menu ul_dd"
            aria-labelledby="dropdownMenuButton1"
          >
            {date.map((ele, i) => (
              <li
                key={i + "dd"}
                onClick={() => {
                  getSingleDay(ele);
                }}
              >
                {ele.date}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="tableContainer">
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name</th>
              <th>id</th>
              <th>state</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {attendenceData.map((ele, i) => (
              <tr key={"list" + i}>
                <td>{i + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.id}</td>
                <td>{ele.present ? "Present" : "Absent"}</td>
                <td>
                  <button className="btn btn-success">view</button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
