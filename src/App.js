import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import { ToastContainer } from "react-toastify";
import StoreContextProvider from "./Context/StoreContext";
import Cart from "./Components/Cart/Cart";
import CheckOut from "./Components/CheckOut/CheckOut";

function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "products", element: <Products /> },
        { path: "product-details/:id", element: <ProductDetails /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "cart", element: <Cart /> },
        { path: "checkout", element: <CheckOut /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <ToastContainer theme="colored" />
      <StoreContextProvider>
        <RouterProvider router={routes} />
      </StoreContextProvider>
    </div>
  );
}

export default App;
