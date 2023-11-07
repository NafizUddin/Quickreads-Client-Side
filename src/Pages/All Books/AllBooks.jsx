import { useQuery } from "@tanstack/react-query";
import useAxiosInterceptorsSecure from "../../Custom Hooks/useAxiosInterceptorsSecure";
import Loading from "../../Components/Loading Component/Loading";
import Navbar from "../../Components/Main Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BooksCardForAllPage from "../../Components/Books Card(AllBooks)/BooksCardForAllPage";

const AllBooks = () => {
  const axiosSecure = useAxiosInterceptorsSecure();

  const getAllBooks = async () => {
    const res = await axiosSecure.get("/api/books");
    return res;
  };

  const {
    data: books,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["allBooks"],
    queryFn: getAllBooks,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>Something went wrong: {error}</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="relative h-[300px] md:h-[250px] mb-16 mt-2">
        <img
          src="https://i.ibb.co/02rqpVC/gabriel-ghnassia-Vm-S8-VQ0n39-Q-unsplash.jpg"
          className="absolute inset-0 object-cover object-center w-full h-full rounded-md"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-70 h-full rounded-md">
          <div className="flex items-center justify-center h-full">
            <h1 className="text-white text-5xl md:text-6xl font-bold">
              All Books
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mx-4 md:mx-7 xl:mx-0 ">
        <div className="xl:col-span-1"></div>
        <div className="xl:col-span-3 mt-4 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {books?.data?.map((book) => (
              <BooksCardForAllPage
                key={book._id}
                book={book}
              ></BooksCardForAllPage>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllBooks;
