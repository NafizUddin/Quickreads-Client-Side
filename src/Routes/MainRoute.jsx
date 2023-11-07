import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Login Page/Login";
import Register from "../Pages/Register Page/Register";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/Error Page/ErrorPage";
import AddBooks from "../Pages/Add Books/AddBooks";
import PrivateRoute from "./PrivateRoute";
import AllBooks from "../Pages/All Books/AllBooks";
import BorrowedBooks from "../Pages/Borrowed Books/BorrowedBooks";
import UpdateBooks from "../Pages/Update Books/UpdateBooks";
import BookCategoryPage from "../Pages/Book Category Page/BookCategoryPage";
import BookDetails from "../Pages/Book Details Page/BookDetails";

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
        element: (
          <PrivateRoute>
            <AddBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/allBooks",
        element: (
          <PrivateRoute>
            <AllBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/borrowedBooks",
        element: (
          <PrivateRoute>
            <BorrowedBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/bookDetails/:id",
        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/api/books/singleBook/${params.id}`),
      },
      {
        path: "/updateBooks/:id",
        element: (
          <PrivateRoute>
            <UpdateBooks />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/api/books/singleBook/${params.id}`),
      },
      {
        path: "/categoryDetails/:category",
        element: (
          <PrivateRoute>
            <BookCategoryPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/api/categories/${params.category}`),
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
