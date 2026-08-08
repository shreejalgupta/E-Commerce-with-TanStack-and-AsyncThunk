import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import PublicRoute from "./ProtectedRoutes/PublicRoute";
import AuthLayout from "../app/Layouts/AuthLayout";
import LoginPage from "../features/auth/UI/pages/LoginPage";
import SignUpPage from "../features/auth/UI/pages/SignUpPage";
import { useDispatch } from "react-redux";
import { ssrImportKey } from "vite/module-runner";
import { hydrationUser } from "../features/auth/state/authThunk";
import MainRoute from "./ProtectedRoutes/MainRoute";
import MainLayout from "../app/Layouts/MainLayout";
import HomePage from "../features/home/UI/pages/HomePage";
import ProductPage from "../features/products/UI/pages/ProductPage";
import About from "../features/about/UI/pages/About";
import Cart from "../features/cart/Ui/pages/Cart";
import FavoritesPage from "../features/FavoritesPage/UI/pages/FavoritesPage";
import { addToCart } from "../features/cart/state/cartSlick";
import { addFav } from "../features/FavoritesPage/state/favSlice";

const AppRoutes = () => {
  const dispatch = useDispatch();

   const getCartItem = JSON.parse(localStorage.getItem('cartItem')) || []
   const fetchFavItem = JSON.parse(localStorage.getItem('favItem')) || [] 
    useEffect(()=> {
            dispatch(addToCart(getCartItem))
            dispatch(addFav(fetchFavItem))
    }, [])

    


  useEffect(() => {
    (async () => {
      let token = localStorage.getItem("accessToken");
      try {
        dispatch(hydrationUser(token));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "signUp",
              element: <SignUpPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/home",
      element: <MainRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "product",
              element: <ProductPage />,
            },
            {
              path: "about",
              element: <About />,
            },
            {
              path: "cart",
              element: <Cart />,
            },
            {
              path: 'favorite',
              element: <FavoritesPage />
            }
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
