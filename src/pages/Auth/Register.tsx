import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import Button from "../../components/UI/Button";
import Loading from "../../components/UI/Loading";

import { StyledForm } from "./Form.styles";

import { useRegisterMutation } from "../../service/authApi";
import { RegisterForm } from "../../model/auth";

const Register = () => {
  const [register, { isLoading, isSuccess }] = useRegisterMutation();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Must be 3 charachters or more")
        .required("Username is Required!"),
      email: Yup.string().email().required("Email is Required!"),
      password: Yup.string()
        .min(3, "Must be 3 charachters or more")
        .required("password is Required!")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{4,})/,
          "Must Contain 4 Characters, One Uppercase, One Lowercase and One Number"
        ),
    }),
    onSubmit: async (values) => {
      const registerInfo: RegisterForm = {
        username: values.username,
        password: values.password,
        email: values.email,
      };
      try {
        await register(registerInfo);
      } catch (err) {
        console.log(err);
      }
    },
  });

  let content: JSX.Element;

  if (isLoading) content = <Loading />;
  if (isSuccess) {
    content = (
      <>
        <h2>Check and Confirm your Email</h2>
        <p>Be sure to check spam of your email</p>
      </>
    );
  } else {
    content = (
      <>
        <StyledForm onSubmit={formik.handleSubmit}>
          <h1>Register</h1>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            {...formik.getFieldProps("username")}
          />
          {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
          ) : null}
          <label htmlFor="email">Email</label>
          <input id="email" type="text" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
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
          <p>Already registered?</p> <Link to="/login">Login</Link>
        </StyledForm>
      </>
    );
  }

  return content!;
};

export default Register;
