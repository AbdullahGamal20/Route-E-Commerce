import { useFormik } from "formik";
import React from "react";

function CheckOut() {
  let checkoutFormik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    onSubmit: (values) => {},
  });

  return (
    <>
      <div className="w-50 m-auto mt-5 pt-5">
        <form onSubmit={checkoutFormik.handleSubmit}>
          <div className="mt-5">
            <label htmlFor="details" className="fw-bold">
              Details :{" "}
            </label>
            <input
              type="text"
              id="details"
              placeholder="details"
              name="details"
              className="form-control my-3"
              onChange={checkoutFormik.handleChange}
              onBlur={checkoutFormik.handleBlur}
            />
          </div>

          <div className="my-4">
            <label htmlFor="phone" className="fw-bold">
              Phone :{" "}
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Phone number"
              name="phone"
              className="form-control my-3"
              onChange={checkoutFormik.handleChange}
              onBlur={checkoutFormik.handleBlur}
            />
          </div>

          <div className="my-4">
            <label htmlFor="city" className="fw-bold">
              City :{" "}
            </label>
            <input
              type="text"
              id="city"
              placeholder="Your City"
              name="city"
              className="form-control my-3"
              onChange={checkoutFormik.handleChange}
              onBlur={checkoutFormik.handleBlur}
            />
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn bg-main details_btn fs-6 w-25  ">
              place order
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CheckOut;
