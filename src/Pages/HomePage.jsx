import React from 'react'
import MainSlider from '../Components/MainSlider/MainSlider'
import CategorySlider from '../Components/CategorySlider/CategorySlider'
import Products from '../Components/Products/Products'

function HomePage() {
  return (
    <>
      <MainSlider />
      <CategorySlider />
      <Products />
    </>
  )
}

export default HomePage