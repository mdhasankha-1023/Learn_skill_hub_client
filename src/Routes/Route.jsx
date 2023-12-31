import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Others from "../Layout/Others";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Home/Details/Details";
import StudentDashboard from "../Layout/StudentDashboard";
import UserHome from "../Pages/DashboardHome/userHome/userHome";
import EnrolledCourses from "../Pages/DashboardHome/EnrolledCourses/EnrolledCourses";
import InstructorDashboard from "../Layout/InstructorDashboard";
import AddCourse from "../Pages/DashboardHome/AddCourse/AddCourse";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
          {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/courses')
          },
          {
            path: '/details/:id',
            element: <Details></Details>,
            loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
          }
        ]
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
    },
    {
      path: '/student-dashboard',
      element: <StudentDashboard></StudentDashboard>,
      children: [
        {
          path: '/student-dashboard',
          element: <UserHome></UserHome>
        },
        {
          path: '/student-dashboard/enrolled-courses',
          element: <EnrolledCourses></EnrolledCourses>,
          loader:() => fetch('http://localhost:5000/enrolled-courses')
        }
      ]
    },
    {
      path: '/instructor-dashboard',
      element: <InstructorDashboard></InstructorDashboard>,
      children: [
        {
          path: '/instructor-dashboard',
          element: <UserHome></UserHome>
        },
        {
          path: '/instructor-dashboard/addCourse',
          element: <AddCourse></AddCourse>
        }
      ]
    }
  ])

  export default router;