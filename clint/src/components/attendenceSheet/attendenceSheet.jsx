import "./attendence.css";

export const AttendenceSheet = () => {
  return (
    <div className="attendenceSheet">
      <div className="titleContainer">
        <h1>Attendence Detail</h1>
      </div>
      <div className="tableContainer">
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name</th>
              <th>id</th>
              <th>Leaves</th>
              <th>Leaves remain</th>
              <th>Absents</th>
              <th>Absents</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>S.N</td>
              <td>Name</td>
              <td>id</td>
              <td>Leaves</td>
              <td>Leaves remain</td>
              <td>Absents</td>
              <td>Absents</td>
            </tr>
            <tr>
              <td>S.N</td>
              <td>Name</td>
              <td>id</td>
              <td>Leaves</td>
              <td>Leaves remain</td>
              <td>Absents</td>
              <td>Absents</td>
            </tr>
            <tr>
              <td>S.N</td>
              <td>Name</td>
              <td>id</td>
              <td>Leaves</td>
              <td>Leaves remain</td>
              <td>Absents</td>
              <td>Absents</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
