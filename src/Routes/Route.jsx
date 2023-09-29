import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Others from "../Layout/Others";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    },
    {
      path: '/',
      element: <Others></Others>,
      children: [
        {
          path: '/sign-in',
          element: <SignIn></SignIn>
        },
        {
          path: '/sign-up',
          element: <SignUp></SignUp>
        }
      ]
    }
  ])

  export default router;