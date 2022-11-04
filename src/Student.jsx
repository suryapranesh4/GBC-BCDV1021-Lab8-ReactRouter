import React from "react";
import { useParams } from "react-router-dom";

export default function Student() {
  const { studentname, studentno } = useParams();
  return (
    <div className="routeData">
      <p>Student</p>
      <div>{`The student name is "${studentname}"!`}</div>
      {studentno && <div>{`The student no is "${studentno}"!`}</div>}
    </div>
  );
}
