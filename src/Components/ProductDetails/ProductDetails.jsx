import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import baseUrl from "../Api/ApiUrl";
import axios from "axios";
import { date } from "yup";
import Loading from "../Loading/Loading";
import { StoreContext } from "../../Context/StoreContext";
import { notify } from "../../Utils/notify";

function ProductDetails() {
  let { id } = useParams();
  const { addToCart, getCartCount } = useContext(StoreContext);
  const [Product, setProduct] = useState([]);

  const getProduct = async () => {
    let { data } = await axios.get(`${baseUrl}/products/${id}`);
    console.log(data.data);
    setProduct(data.data);
  };

  async function addProduct(productId) {
    let token = localStorage.getItem("token");
    if (token) {
      let response = await addToCart(token, productId);
      if (response.status === 200) {
        getCartCount();
        notify("Product Added Successfully", "success");
      }
      console.log(response);
    } else {
      alert("You Are Not Logged in ");
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {Product.length !== 0 ? (
        <div className="container mt-5 pt-3">
          <div className="row d-flex  justify-content-between align-items-center">
            <div className="col-md-4">
              <img
                src={Product.imageCover}
                alt="Image"
                className="w-100 mt-5"
              />
            </div>
            <div className="col-md-8  ">
              <h3 className="fw-bold mb-4">{Product.title}</h3>
              <p className="my-3">{Product.description}</p>

              <div className="d-flex justify-content-between align-items-center mt-4">
                <h6 className="fw-bold">{Product.price} EGP</h6>
                <div>
                  <i className="ri-star-fill rating-color fs-4 me-1"></i>
                  <span className="fw-bold">
                    {Product.ratingsAverage} / {Product.ratingsQuantity} Ratings
                  </span>
                </div>
              </div>
              <button
                className="btn details_btn w-100  mt-4 "
                onClick={() => addProduct(Product._id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ProductDetails;
