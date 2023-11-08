import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Main Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Rating from "react-rating";
import { BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";
import { GiRead } from "react-icons/gi";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import useAuth from "../../Custom Hooks/useAuth";
import useAxiosInterceptorsSecure from "../../Custom Hooks/useAxiosInterceptorsSecure";
import Swal from "sweetalert2";

const BookDetails = () => {
  const singleBook = useLoaderData();
  const [successMsg, setSuccessMsg] = useState("");
  const { handleSubmit, formState, control, setValue } = useForm();
  const { errors } = formState;
  const { user } = useAuth();
  const axiosSecure = useAxiosInterceptorsSecure();
  const [isExists, setIsExists] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setValue("borrowDate", new Date());
  }, [setValue]);

  useEffect(() => {
    axiosSecure.get("/api/borrowedBooks").then((res) => {
      setIsExists(
        res?.data?.find((book) => book?.bookName === singleBook?.name)
      );
    });
  }, [axiosSecure, singleBook.name]);

  useEffect(() => {
    if (singleBook?.quantity <= 0) {
      const buttonElement = document.getElementById("borrow");
      buttonElement.setAttribute("disabled", true);
    }
  }, [singleBook?.quantity]);

  const showError = () => {
    Swal.fire("Ooppss!", "You have already borrowed this book", "error");
  };

  const handleBorrowInformation = (data) => {
    // console.log(isExists);
    // reset({ returnDate: null });
    const borrowDate = data?.borrowDate?.toString();
    const newBorrowDate = borrowDate.slice(4, 15);

    const returnDate = data?.returnDate?.toString();
    const newReturnDate = returnDate.slice(4, 15);

    const borrowInfo = {
      userName: user?.displayName,
      userEmail: user?.email,
      borrowDate: newBorrowDate,
      returnDate: newReturnDate,
      bookName: singleBook?.name,
      bookImage: singleBook?.photo,
      category: singleBook?.bookCategory,
    };

    const quantityInNum = parseInt(singleBook.quantity);
    const updatedQuantity = quantityInNum - 1;

    const updatedQuantityObj = {
      quantity: updatedQuantity,
    };

    axiosSecure.post("/api/borrowedBooks", borrowInfo).then((res) => {
      if (res.data.insertedId) {
        axiosSecure
          .patch(`/api/books/singleBook/${singleBook._id}`, updatedQuantityObj)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              setSuccessMsg("You have borrowed this book successfully");
              navigate("/borrowedBooks");
            }
          });
      }
    });
  };

  //   _id, name, author, quantity, photo, description, preview, bookCategory, rating
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
              Book Details
            </h1>
          </div>
        </div>
      </div>
      <div className="h-[450px] relative mb-32">
        <img
          src="https://images.unsplash.com/photo-1536965764833-5971e0abed7c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 object-cover object-center w-full h-full rounded-md"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-70 h-full rounded-md">
          <div className="flex items-center xl:gap-20 h-full w-4/5 mx-auto text-white">
            <img
              src={singleBook.photo}
              className="h-[440px] w-[250px] relative top-16 rounded-md shadow-2xl"
            />
            <div className="space-y-4">
              <p className="text-2xl font-medium">By {singleBook?.author}</p>
              <h1 className="text-5xl font-semibold">{singleBook?.name}</h1>
              <div className="md:text-2xl flex items-center gap-3">
                <span className="font-medium">Rating: </span>
                <span className="mt-1">
                  <Rating
                    initialRating={singleBook?.rating}
                    fullSymbol={
                      <BsFillStarFill className="text-[#FF9529]"></BsFillStarFill>
                    }
                    emptySymbol={<BsStar className="text-[#FF9529]"></BsStar>}
                    readonly
                  />
                </span>
              </div>
              <p className="md:text-2xl mt-2">
                <span className="font-medium">Category:</span>{" "}
                <span>{singleBook?.bookCategory}</span>
              </p>
              <p className="md:text-2xl mt-2">
                <span className="font-medium">Quantity:</span>{" "}
                <span>{singleBook?.quantity}</span>
              </p>
              <div className="flex gap-7">
                {isExists ? (
                  <button
                    onClick={() => showError()}
                    className=" px-5 py-3 font-medium bg-primary text-white rounded-2xl flex gap-2 items-center text-xl"
                  >
                    Borrow Book <FiBookOpen className="mt-1 text-lg" />
                  </button>
                ) : (
                  <div>
                    <button
                      id="borrow"
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                      className=" px-5 py-3 font-medium bg-primary text-white rounded-2xl flex gap-2 items-center text-xl"
                    >
                      Borrow Book <FiBookOpen className="mt-1 text-lg" />
                    </button>
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box max-w-2xl h-[500px]">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="bg-primary btn-circle  absolute right-3 top-3">
                            ✕
                          </button>
                        </form>
                        <div className="flex flex-col justify-center items-center text-gray-900 dark:text-white">
                          <h3 className="font-bold text-3xl mt-5">
                            📚 Book Borrow Information 📚
                          </h3>
                          <form
                            onSubmit={handleSubmit(handleBorrowInformation)}
                            className="space-y-4 md:space-y-6 mt-7"
                            noValidate
                            method="dialog"
                          >
                            <div className="flex gap-8 items-center">
                              <label
                                htmlFor="borrowDate"
                                className="block mb-2 text-xl font-semibold dark:text-primary text-gray-900"
                              >
                                Borrow Date
                              </label>

                              <Controller
                                name="borrowDate"
                                control={control}
                                render={({ field }) => {
                                  return (
                                    <DatePicker
                                      selected={field.value}
                                      onChange={field.onChange}
                                      dateFormat="dd-MM-yyyy"
                                      className="bg-[#F3F3F3] text-gray-900 sm:text-sm rounded-lg border border-primary focus:outline-none focus:ring focus:ring-blue-500 block p-3 dark:bg-gray-500 dark:text-white"
                                    />
                                  );
                                }}
                              />

                              <p className="mt-2 text-sm text-red-600 font-medium">
                                {errors?.borrowDate?.message}
                              </p>
                            </div>
                            <div className="flex gap-8 items-center">
                              <label
                                htmlFor="borrowDate"
                                className="block mb-2 text-xl font-semibold dark:text-primary text-gray-900"
                              >
                                Return Date
                              </label>
                              <Controller
                                name="returnDate"
                                control={control}
                                render={({ field }) => (
                                  <DatePicker
                                    selected={field.value}
                                    onChange={(date) => field.onChange(date)}
                                    dateFormat="dd-MM-yyyy"
                                    className="bg-[#F3F3F3] text-gray-900 sm:text-sm rounded-lg border border-primary focus:outline-none focus:ring focus:ring-blue-500 block p-3 dark:bg-gray-500 dark:text-white ml-1"
                                    placeholderText="Enter Return Date"
                                  />
                                )}
                              />
                            </div>
                            <div className="flex justify-center pt-4">
                              <input
                                type="submit"
                                value="Submit"
                                className="cursor-pointer px-5 py-3 font-medium bg-primary text-white rounded-2xl flex gap-2 items-center text-xl"
                              />
                            </div>
                          </form>
                          <p className="text-center text-green-600 pt-4">
                            {successMsg}
                          </p>
                        </div>
                      </div>
                    </dialog>
                  </div>
                )}

                <Link to={`/readBook/${singleBook?._id}`}>
                  <button className="px-5 py-3 font-medium text-primary rounded-2xl flex gap-2 items-center text-xl outline outline-primary">
                    Read Book <GiRead className="mt-1 text-lg" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-12">
        <h1 className="text-center text-5xl text-primary font-bold">
          Book Description
        </h1>
        <div className="flex items-center py-7 w-1/3 mx-auto">
          <div className="w-1/2 h-1 bg-primary"></div>
          <div className="w-6 h-6 bg-primary transform rotate-45"></div>
          <div className="w-1/2 h-1 bg-primary"></div>
        </div>
        <p className="w-11/12 mx-auto text-xl text-gray-500 dark:text-white">
          {singleBook?.description}
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BookDetails;
