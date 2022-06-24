// importing from library
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

// importing components
import { NavBar } from "../navBar/navBar";
import { RegistrationForm } from "../registration/registration";
import { AttendenceSheet } from "../attendenceSheet/attendenceSheet";
import { MarkAttendecne } from "../markAttendence/markAttendence";
import { AdminHome } from "../adminHome/adminHome";
//function to render
export const AllRoutes = () => {
  const { isEmployee } = useSelector((state) => state.TrackLogin);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={!isEmployee ? <AdminHome /> : <MarkAttendecne />}
        />
        <Route path="/home" element={<RegistrationForm />} />
        <Route path="/attendence" element={<AttendenceSheet />} />
      </Routes>
    </>
  );
};
