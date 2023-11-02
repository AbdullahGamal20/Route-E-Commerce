import React, { useContext, useEffect, useRef, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { notify } from "../../Utils/notify";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

function Cart() {
  let {
    getUserCart,
    removeCartItem,
    deleteCart,
    updateQuantity,
    getCartCount,
    setCount,
  } = useContext(StoreContext);
  let [cart, setCart] = useState([]);
  let [totalPrice, setTotalPrice] = useState(0);

  async function getCart() {
    let token = localStorage.getItem("token");

    if (token) {
      let response = await getUserCart(token);
      setCart(response.data.data.products);
      setTotalPrice(response.data.data.totalCartPrice);
      console.log(response);
    }
  }

  async function deleteProductFromCart(productId) {
    let token = localStorage.getItem("token");
    if (token) {
      let response = await removeCartItem(token, productId);
      setCart(response.data.data.products);
      setTotalPrice(response.data.data.totalCartPrice);
      notify("product has been deleted successfully", "success");
      getCartCount();
      console.log(response);
    }
  }

  async function updateProductQuantity(productId, count) {
    let token = localStorage.getItem("token");
    if (token) {
      if (count > 0) {
        let response = await updateQuantity(token, productId, count);
        setCart(response.data.data.products);
        setTotalPrice(response.data.data.totalCartPrice);
        notify("Quantity Updated Successfully ", "success");
        console.log(response);
      } else {
        return;
      }
    }
  }

  async function clearCart() {
    let token = localStorage.getItem("token");
    if (token) {
      let response = await deleteCart(token);
      console.log(response);
      setCart([]);
      setTotalPrice(0);
      notify("Cart has been deleted successfully", "success");
      setCount(0);
    }
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      {cart.length != 0 ? (
        <div className="container mt-5 pt-4">
          <div className="bg-main-light p-3 my-4">
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="fw-bold">Shop Cart</h3>
              <button
                className="btn btn-outline-danger"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </div>

            <h6 className="text-main my-3 fw-bold">
              Total cart Price : {totalPrice} EGP
            </h6>
            {cart.map((item) => {
              return (
                <div className="row border-bottom" key={item._id}>
                  <div className="col-md-11 d-flex align-items-center justify-content-between">
                    <div className="col-md-1 mb-2">
                      <img
                        src={item.product.imageCover}
                        className="w-100 m-2 "
                        alt="Image"
                        style={{ height: "100px" }}
                      />
                    </div>

                    <div className="text-center my-3">
                      <h6>{item.product.title}</h6>
                      <h6 className="text-main mx-2 fw-bolder pt-2">
                        {item.price} EGP
                      </h6>
                      <button
                        className="btn btn-outline-danger mt-2 "
                        onClick={() => deleteProductFromCart(item.product._id)}
                      >
                        Remove <i className="ri-delete-bin-line"></i>
                      </button>
                    </div>
                    <div className="p-3">
                      <button
                        className="btn btn_border"
                        onClick={() => {
                          updateProductQuantity(
                            item.product._id,
                            item.count + 1
                          );
                        }}
                      >
                        +
                      </button>
                      <span className="mx-2">{item.count}</span>
                      <button
                        className="btn btn_border"
                        onClick={() => {
                          updateProductQuantity(
                            item.product._id,
                            item.count - 1
                          );
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center">
            <Link
              to="/checkout"
              className="btn bg-main details_btn fs-6 fw-normal w-25"
            >
              Check Out
            </Link>
          </div>
        </div>
      ) : (
        <>
          <Loading />
          <h2 className="text-danger fw-bold my-3 text-center">
            Cart Is Empty <br />
          </h2>
          <h2 className="text-danger  fw-bold my-3 text-center">
            Add Products to Full it
          </h2>
        </>
      )}
    </>
  );
}

export default Cart;
