import { useQuery } from "@tanstack/react-query";
import useAxiosInterceptorsSecure from "../../Custom Hooks/useAxiosInterceptorsSecure";
import Loading from "../../Components/Loading Component/Loading";
import Navbar from "../../Components/Main Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

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
      {books?.data?.map((book) => (
        <div key={book._id}>
          <h1>{book?.name}</h1>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default AllBooks;
