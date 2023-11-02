import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import baseUrl from "../Api/ApiUrl";

function CategorySlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [Categories, setCategoreis] = useState([]);

  const getAllCategories = async () => {
    let { data } = await axios.get(`${baseUrl}/categories`);
    setCategoreis(data.data);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <div className="container w-100 my-5 ">
        <h2 className="pt-4 pb-3">Shop Popular Categories</h2>
        <Slider {...settings}>
          {Categories.map((item) => {
            return (
              <div key={item._id}>
                <img
                  src={item.image}
                  alt="Image"
                  className="w-100"
                  height={200}
                />
                <h5 className=" pt-3 text-center">{item.name}</h5>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default CategorySlider;
