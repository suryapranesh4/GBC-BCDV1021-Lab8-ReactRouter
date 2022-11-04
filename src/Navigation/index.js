import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div className="routes">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
