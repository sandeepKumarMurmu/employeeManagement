// importing from library
import { Route, Routes } from "react-router-dom";

// importing components
import { NavBar } from "../navBar/navBar";
import { RegistrationForm } from "../registration/registration";
import { AttendenceSheet } from "../attendenceSheet/attendenceSheet";

//function to render
export const AllRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/attendence" element={<AttendenceSheet />} />
      </Routes>
    </>
  );
};
