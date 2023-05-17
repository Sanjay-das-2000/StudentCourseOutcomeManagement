import React from "react";
import { Route,Navigate,Routes } from "react-router-dom";
import Home from "./bodyContent/Home";
import NewSession from "./bodyContent/NewSession";
import NewCourse from "./bodyContent/NewCourse";
import StudentInfo from "./bodyContent/StudentInfo";
import StudentForm from "./bodyContent/StudentForm";
import EditUser from "./bodyContent/EditUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/newsession" element={<NewSession />} />
        <Route path="/newcourse" element={<NewCourse />} />
        <Route path="/studentinfo" element={<StudentInfo />} />
        <Route path="/studentform" element={<StudentForm />} />
        <Route path="/edituser/:id" element={<EditUser />} />
        

      </Routes>
    </>
  );
}

export default App;
