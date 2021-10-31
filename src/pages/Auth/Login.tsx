import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onLoggedIn } from "../../store/authSlice";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import { StyledForm } from "./Form.styles";
import Button from "../../components/UI/Button";
import { useLoginMutation } from "../../service/authApi";
import queryString from "query-string";
import Loading from "../../components/UI/Loading";
import { Link } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Must be 3 charachters or more")
        .required("Username is Required!"),
      password: Yup.string()
        .min(3, "Must be 3 charachters or more")
        .required("password is Required!"),
    }),
    onSubmit: async (values) => {
      const params = queryString.stringify(values);
      try {
        const result = await login(params);

        if ("data" in result) {
          console.log(result.data);
          dispatch(onLoggedIn(result.data));
          history.replace("/");
        }
      } catch (err) {
        console.log(err);
      }
    },
  });

  if (isLoading) return <Loading />;

  return (
    <>
      <StyledForm onSubmit={formik.handleSubmit}>
        <h1>Login</h1>
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
        <br />
        <Button type="submit">Submit</Button>
        <p>
          No account?</p>
          <Link to="/register"> Register </Link>        
      </StyledForm>
    </>
  );
};

export default Login;
