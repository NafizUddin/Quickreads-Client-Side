import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Main Navbar/Navbar";
import useAxiosInterceptorsSecure from "../../Custom Hooks/useAxiosInterceptorsSecure";
import { useQuery } from "@tanstack/react-query";
import BooksCardDetailsPage from "../../Components/Books Card For Details Page/BooksCardDetailsPage";
import Loading from "../../Components/Loading Component/Loading";

const BookCategoryPage = () => {
  const bookCategory = useLoaderData();
  const axiosSecure = useAxiosInterceptorsSecure();

  const { data: categoryBooks, isLoading } = useQuery({
    queryKey: ["categoryBooks", bookCategory.category],
    queryFn: async () =>
      axiosSecure
        .get(`/api/books/${bookCategory.category}`)
        .then((data) => data.data),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="relative h-[300px] md:h-[250px] mb-16 mt-2">
        <img
          src="https://images.unsplash.com/photo-1490332695540-5acc256ec383?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 object-cover object-center w-full h-full rounded-md"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-70 h-full rounded-md">
          <div className="flex items-center justify-center h-full">
            <h1 className="text-white text-5xl md:text-6xl font-bold">
              Book Category: {bookCategory?.category}
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mx-4 md:mx-7 xl:mx-0 ">
        <div className="xl:col-span-3 mt-4 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {categoryBooks?.map((book) => (
              <BooksCardDetailsPage
                key={book._id}
                book={book}
              ></BooksCardDetailsPage>
            ))}
          </div>
        </div>
        <div className="xl:col-span-1 mt-4"></div>
      </div>
    </div>
  );
};

export default BookCategoryPage;
