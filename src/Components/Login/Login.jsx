import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import baseUrl from "../Api/ApiUrl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const notify = (msg, type) => toast[type](msg);

  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  let validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  let registerFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);

      axios
        .post(`${baseUrl}/auth/signin`, values)
        .then((data) => {
          if (data.status == 200) {
            localStorage.setItem("token", data.data.token);
            setLoading(false);
            notify("Success", "success");
            navigate("/");
          }
          console.log(data);
        })
        .catch((error) => {
          if (error.response.status == 401) {
            setLoading(false);
            notify(error.response.data.message, "error");
          }
        });
    },
  });

  return (
    <>
      <div className="w-50 m-auto my-5">
        <h2 className="fw-bold text-center">Login Now :</h2>
        <form onSubmit={registerFormik.handleSubmit}>
          <div className="mt-4">
            <label htmlFor="email mt-5" className="fw-bold">
              Email :
            </label>

            <input
              onBlur={registerFormik.handleBlur}
              value={registerFormik.values.email}
              onChange={registerFormik.handleChange}
              type="email"
              className="form-control my-3"
              id="email"
              placeholder=" Email"
              name="email"
            />

            {registerFormik.errors.email && registerFormik.touched.email ? (
              <div className="alert alert-danger">
                {registerFormik.errors.email}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="mt-4">
            <label htmlFor="password mt-5" className="fw-bold">
              Password :
            </label>

            <input
              onBlur={registerFormik.handleBlur}
              value={registerFormik.values.password}
              onChange={registerFormik.handleChange}
              type="password"
              className="form-control my-3"
              id="password"
              placeholder=" Password"
              name="password"
            />

            {registerFormik.errors.password &&
            registerFormik.touched.password ? (
              <div className="alert alert-danger">
                {registerFormik.errors.password}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="d-flex justify-content-center">
            <button
              disabled={
                !(registerFormik.isValid && registerFormik.dirty && !loading)
              }
              type="submit"
              className="btn bg-main text-light fs-5 fw-normal text-capitalize details_btn mt-3 w-50 text-center"
            >
              {!loading ? "Login" : <i class="fas fa-spinner fa-spin"></i>}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
