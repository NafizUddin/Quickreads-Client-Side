import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Main Navbar/Navbar";
import useAxiosInterceptorsSecure from "../../Custom Hooks/useAxiosInterceptorsSecure";
import { useQuery } from "@tanstack/react-query";
import BooksCardDetailsPage from "../../Components/Books Card For Details Page/BooksCardDetailsPage";
import Loading from "../../Components/Loading Component/Loading";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

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
        <div className="xl:col-span-1 mt-4">
          <div>
            <h1 className="text-2xl pl-3 text-center pb-5 font-medium">
              Book category Tags
            </h1>
            <div className="grid grid-cols-12 grid-rows-3 gap-3">
              <div className="col-span-4 rounded-xl text-center py-2 text-white bg-primary">
                Fantasy
              </div>
              <div className="col-span-4 rounded-xl text-center py-2 text-white bg-primary">
                Mystery
              </div>
              <div className="col-span-4 rounded-xl text-center py-2 text-white bg-primary">
                History
              </div>
              <div className="col-span-6 rounded-xl text-center py-2 text-white bg-primary">
                SciFi
              </div>
              <div className="col-span-5 rounded-xl text-center py-2 text-white bg-primary">
                Romance
              </div>
              <div className="col-span-5 rounded-xl text-center py-2 text-white bg-primary">
                NonFiction
              </div>
              <div className="col-span-4 rounded-xl text-center py-2 text-white bg-primary">
                Dystopia
              </div>
            </div>
            <div className="mt-7 py-5 bg-[#F3F4F6]">
              <h1 className="text-2xl text-center pb-5 font-medium">
                Get In Touch
              </h1>
              <div className="flex gap-3 items-center pl-4">
                <div className="text-xl">
                  <FaLocationDot></FaLocationDot>
                </div>
                <p>Honey Business, 24 Fifth street, Los Angeles, USA</p>
              </div>
              <div className="flex gap-3 items-center py-4 pl-4">
                <div className="text-xl">
                  <MdEmail></MdEmail>
                </div>
                <p className="lg:text-sm xl:text-base">quickreads@gmail.com</p>
              </div>
              <div className="flex gap-3 items-center pt-1 pb-4 pl-4">
                <div className="text-xl">
                  <BsTelephoneFill></BsTelephoneFill>
                </div>
                <p>(+01) 123 456 7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCategoryPage;
