import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <h1>Register</h1>
      <p>Already registered?</p> <Link to="/login">Login</Link>
    </>
  );
};

export default Register;
