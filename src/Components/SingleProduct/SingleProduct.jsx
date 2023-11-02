import React, { useContext } from "react";
import "../../styles/singleProduct.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { notify } from "../../Utils/notify";

function SingleProduct({ products }) {
  let { addToCart, getCartCount } = useContext(StoreContext);

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

  return (
    <>
      {products.map((item) => {
        return (
          <div className="col-md-3 single_product my-3 " key={item._id}>
            <div className="product my-3 mx-2">
              <Link to={`/product-details/${item._id}`}>
                <img src={item.imageCover} className="w-100" alt="Image" />

                <h6 className="text-main mt-3 text-center ">
                  {item.category.name}
                </h6>
                <p className=" m-0 text-center fw-bolder ">
                  {item.title.split(" ").slice(0, 2).join(" ")}
                </p>
                <div className="d-flex align-items-center justify-content-between my-3 mx-2">
                  <span className="">EGP {item.price}</span>
                  <span className="d-flex align-items-center gap-1 ">
                    <span>{item.ratingsAverage}</span>
                    <span>
                      <i className="ri-star-fill rating-color "></i>
                    </span>
                  </span>
                </div>
              </Link>
              <button
                className="btn bg-main text-light w-100"
                onClick={() => addProduct(item._id)}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default SingleProduct;
