import {
    createBrowserRouter,
   
    
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Comaponent/Share/Login/Login";
import SignUp from "../Comaponent/Share/SignUp/SignUp";
import ErrorPage from "../Comaponent/Share/ErrorPage/ErrorPage"
import ProductDetail from "../Pages/Home/Service/ProductDetail";

   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signup',
          element:<SignUp/>
        },
        {
          path:'/detail/:id',
          element:<ProductDetail></ProductDetail>,
          loader: ({params})=> fetch(`http://localhost:5000/all_product/${params.id}`)
        }
      ]
    }
  ]);