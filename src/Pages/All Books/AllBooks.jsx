import { useQuery } from "@tanstack/react-query";
import useAxiosInterceptorsSecure from "../../Custom Hooks/useAxiosInterceptorsSecure";
import Loading from "../../Components/Loading Component/Loading";
import Navbar from "../../Components/Main Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BooksCardForAllPage from "../../Components/Books Card(AllBooks)/BooksCardForAllPage";
import { FaFilter } from "react-icons/fa";
import { useEffect, useState } from "react";

const AllBooks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const axiosSecure = useAxiosInterceptorsSecure();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [quantity, setQuantity] = useState(null);

  // const getAllBooks = async () => {
  //   const res = await axiosSecure.get("/api/books");
  //   return res;
  // };

  // const getCategories = async () => {
  //   const res = await axiosSecure.get("/api/categories");
  //   return res;
  // };

  // const handleFilter = (cat) => {
  //   console.log(cat);

  //   const remaining = dataCollection?.books.filter(
  //     (book) => book.bookCategory === cat
  //   );
  //   console.log(remaining);
  // };

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () =>
      axiosSecure.get("/api/categories").then((data) => data.data),
  });
  // console.log(categories);
  // console.log(selectedCategory)
  const {
    data: allBooks,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["allBooks", selectedCategory, quantity],
    queryFn: async () =>
      axiosSecure.get(`/api/books?quantity=${quantity}`).then(
        (data) => {
          if (selectedCategory.length > 0) {
            return data.data.filter(
              (book) => book.bookCategory === selectedCategory
            );
          } else {
            return data.data;
          }
        }
        // setAllBooks(filteredBooks)
      ),
  });

  console.log(quantity);
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
        <div className="xl:col-span-1 mt-4">
          <div className="flex items-center gap-3 justify-center">
            <FaFilter className="dark:text-primary text-3xl" />
            <span className="text-2xl font-semibold">Filter By</span>
          </div>
          <div className="m-6 flex justify-center xl:block">
            <button
              onClick={() => setQuantity(0)}
              className="xl:w-full w-1/2 py-3 lg:w-1/3 bg-primary text-white rounded-md text-xl hover:bg-[#1083A7]"
            >
              Quantity
            </button>
          </div>
          <div className="bg-base-200 py-6 dark:bg-gray-800 rounded-md lg:flex lg:flex-col md:w-2/3 mx-auto xl:w-full">
            <div className="flex items-center gap-3 justify-center mb-5">
              <FaFilter className="dark:text-primary text-3xl" />
              <span className="text-2xl font-semibold">Filter By Category</span>
            </div>
            <li
              onClick={() => {
                setSelectedCategory("");
                setQuantity(null);
              }}
              className="mx-7 text-3xl hover:text-primary dark:text-white dark:hover:text-primary cursor-pointer pt-2 md:pl-10 lg:pl-24 xl:pl-0"
            >
              All
            </li>
            <div>
              {categories?.map((category) => (
                <div key={category._id} className="my-5">
                  <li
                    onClick={() => {
                      setSelectedCategory(category.category);
                      setQuantity(null);
                    }}
                    className="mx-7 text-3xl hover:text-primary dark:text-white dark:hover:text-primary cursor-pointer md:pl-10 lg:pl-24 xl:pl-0"
                  >
                    {category.category}
                  </li>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="xl:col-span-3 mt-4 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {allBooks?.map((book) => (
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
