import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Login Page/Login";
import Register from "../Pages/Register Page/Register";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/Error Page/ErrorPage";
import AddBooks from "../Pages/Add Books/AddBooks";
import PrivateRoute from "./PrivateRoute";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/addBooks",
        element: <AddBooks />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default MainRoute;
