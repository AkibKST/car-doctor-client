import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../login/Login";
import SignUp from "../signup/SignUp";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router;