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
import ReadBook from "../Pages/Read Book Page/ReadBook";
import LibrarianRoute from "./LibrarianRoute";

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
            <LibrarianRoute>
              <AddBooks />
            </LibrarianRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/allBooks",
        element: (
          <PrivateRoute>
            <LibrarianRoute>
              <AllBooks />
            </LibrarianRoute>
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
        path: "/readBook/:id",
        element: (
          <PrivateRoute>
            <ReadBook />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://eleventh-assignment-server-side.vercel.app/api/books/singleBook/${params.id}`
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
          fetch(
            `https://eleventh-assignment-server-side.vercel.app/api/books/singleBook/${params.id}`
          ),
      },
      {
        path: "/updateBooks/:id",
        element: (
          <PrivateRoute>
            <LibrarianRoute>
              <UpdateBooks />
            </LibrarianRoute>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://eleventh-assignment-server-side.vercel.app/api/books/singleBook/${params.id}`
          ),
      },
      {
        path: "/categoryDetails/:category",
        element: (
          <PrivateRoute>
            <BookCategoryPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://eleventh-assignment-server-side.vercel.app/api/categories/${params.category}`
          ),
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
