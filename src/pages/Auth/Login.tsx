import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onLoggedIn } from "../../store/authSlice";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import styled from "styled-components";
import Button from "../../components/UI/Button";
import { useLoginMutation } from "../../service/authApi";
import queryString from "query-string";
import { User } from "../../model/auth";
import Loading from "../../components/UI/Loading";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-width: 45rem;
  width: 90%;
  min-height: 200px;
  margin: auto;
  margin-top: -10rem;
  margin-bottom: 2rem;
  position: relative;
  background-color: var(--color-background2);
  color: white;
  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);

  input {
    width: 10rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
  }
`;

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
      </StyledForm>
    </>
  );
};

export default Login;
