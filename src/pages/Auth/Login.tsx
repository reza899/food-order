import React from "react";
import { useDispatch } from "react-redux";
import { onLoggedIn } from "../../store/authSlice";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(5, "Must be 5 charachters or more")
        .required("Username is Required!"),
      password: Yup.string()
        .min(5, "Must be 5 charachters or more")
        .required("password is Required!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(onLoggedIn());
      history.replace("/");
    },
  });

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          {...formik.getFieldProps("username")}
        />
        {formik.touched.username && formik.errors.username ? (
          <div>{formik.errors.username}</div>
        ) : null}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
