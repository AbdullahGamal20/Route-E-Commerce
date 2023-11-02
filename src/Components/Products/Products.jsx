import React, { useEffect, useState } from "react";
import baseUrl from "../Api/ApiUrl";
import axios from "axios";
import SingleProduct from "../SingleProduct/SingleProduct";
import { date } from "yup";
import Loading from "../Loading/Loading";
function Products() {
  const [Products, setProducts] = useState([]);

  const getAllProducts = async () => {
    let { data } = await axios.get(`${baseUrl}/products`);
    setProducts(data.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="container mt-5 pt-5">
      {Products.length != 0 ? (
        <div className="row">
          <SingleProduct products={Products} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Products;
