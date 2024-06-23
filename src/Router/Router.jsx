import {
    createBrowserRouter,
   
    
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Comaponent/Share/Login/Login";
import SignUp from "../Comaponent/Share/SignUp/SignUp";
import ErrorPage from "../Comaponent/Share/ErrorPage/ErrorPage"
import ProductDetail from "../Pages/Home/Service/ProductDetail";
import Opinion from "../Pages/Opinion/Opinion";
import Address from "../Pages/Address/Address";
import AddProduct from "../Pages/AddProduct/AddProduct";
import ProductSec from "../Pages/AddProduct/ProductSec";
import PrivateRoute from "./PrivateRoute";
import Users from "../Pages/Users/Users";

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
           path:'/opinion',
           element:<Opinion></Opinion>
        },
        {
          path:'/address',
          element:<Address></Address> 
        },
        {
          path:'/AddProduct',
          element:<PrivateRoute> <AddProduct></AddProduct> </PrivateRoute>
        },
        {
          path:'/seeProduct',
          element:<PrivateRoute> <ProductSec></ProductSec>  </PrivateRoute> 
        },
        {
          path:'/users',
          element:<PrivateRoute> <Users></Users> </PrivateRoute>
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
          element: <PrivateRoute> <ProductDetail></ProductDetail> </PrivateRoute> ,
          loader: ({params})=> fetch(`https://bangler-khrici-server.vercel.app/all_product/${params.id}`)
        }
      ]
    }
  ]);