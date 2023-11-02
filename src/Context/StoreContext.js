import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import baseUrl from "../Components/Api/ApiUrl";

export let StoreContext = createContext(0);

function StoreContextProvider({ children }) {
  let [count, setCount] = useState(0);

  function addToCart(token, productId) {
    return axios
      .post(
        `${baseUrl}/cart`,
        { productId },
        {
          headers: {
            token,
          },
        }
      )
      .then((data) => {
        return data;
      })
      .catch((error) => error);
  }

  function getUserCart(token) {
    return axios
      .get(`${baseUrl}/cart`, {
        headers: {
          token,
        },
      })
      .then((data) => {
        return data;
      })
      .catch((error) => error);
  }

  function removeCartItem(token, productId) {
    return axios
      .delete(`${baseUrl}/cart/${productId}`, {
        headers: {
          token,
        },
      })
      .then((data) => {
        return data;
      })
      .catch((error) => error);
  }

  function updateQuantity(token, productId, count) {
    return axios
      .put(
        `${baseUrl}/cart/${productId}`,
        { count },
        {
          headers: {
            token,
          },
        }
      )
      .then((data) => {
        return data;
      })
      .catch((error) => error);
  }

  function deleteCart(token) {
    return axios
      .delete(`${baseUrl}/cart`, {
        headers: {
          token,
        },
      })
      .then((data) => {
        return data;
      })
      .catch((error) => error);
  }

  function getCartCount() {
    let token = localStorage.getItem("token");
    axios
      .get(`${baseUrl}/cart`, {
        headers: {
          token,
        },
      })
      .then((data) => {
        setCount(data.data.numOfCartItems);
        console.log(data.data.numOfCartItems);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getCartCount();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        addToCart,
        getUserCart,
        removeCartItem,
        deleteCart,
        updateQuantity,
        getCartCount,
        count,
        setCount,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
