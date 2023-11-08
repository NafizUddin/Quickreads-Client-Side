import Swal from "sweetalert2";
import logo from "../../assets/Images/Logos/LightLogo-removebg-preview.png";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Main Navbar/Navbar";
import { Controller, useForm } from "react-hook-form";
import "./addBooks.css";
import useAxiosInterceptorsSecure from "../../Custom Hooks/useAxiosInterceptorsSecure";
import { useEffect } from "react";
import useAuth from "../../Custom Hooks/useAuth";

const AddBooks = () => {
  const { register, control, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosInterceptorsSecure();
  const { user } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddBooks = (data) => {
    console.log(data);

    axiosSecure.post(`/api/books?email=${user?.email}`, data).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire("Good job!", "You added a new book", "success");
        reset();
      }
    });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="relative h-[580px] md:h-[400px] lg:h-[280px] mb-16 mt-2">
        <img
          src="https://i.ibb.co/42xqdDV/large-collection-old-books-wooden-shelves-generated-by-ai-188544-29739.jpg"
          className="absolute inset-0 object-cover object-center w-full h-full rounded-md"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-70 h-full rounded-md">
          <div className="flex flex-col items-center justify-center h-full">
            <img src={logo} className="w-[300px] block md:hidden"></img>
            <h1 className="text-white text-4xl md:text-6xl font-bold mt-2 text-center">
              Add New Book
            </h1>
            <p className="text-center py-3 mx-8 text-white">
              <span className="text-primary">QuickReads</span>: Your Gateway to
              Knowledge and Imagination
            </p>
            <p className="text-center lg:max-w-2xl lg:mx-auto mx-6 text-white">
              Discover a world of knowledge and endless imagination at your
              community&apos;s literary sanctuary, where books invite you to
              unleash your curiosity one page at a time.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-14 dark:text-white">
        <form
          onSubmit={handleSubmit(handleAddBooks)}
          className="w-11/12 mx-auto my-8"
        >
          <div className="flex flex-col lg:flex-row  gap-7 px-8 mb-4">
            <div className="flex-1">
              <label
                className="text-lg font-semibold text-primary"
                htmlFor="name"
              >
                Book Name
              </label>
              <br />
              <input
                type="text"
                required
                {...register("name")}
                placeholder="Enter Book Name"
                className="w-full py-3 px-4 my-2 rounded border border-primary focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-500 dark:text-white"
              />
            </div>
            <div className="flex-1">
              <label
                className="text-lg font-semibold text-primary"
                htmlFor="books"
              >
                Book Category
              </label>
              <br />
              <Controller
                name="bookCategory"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="my-2 border border-primary text-base focus:outline-none focus:ring block w-full py-3 px-4 rounded focus:ring-blue-500 dark:bg-gray-500 dark:text-white"
                  >
                    <option value="">Select a book category</option>
                    <option value="History">History</option>
                    <option value="Science">Science</option>
                    <option value="Literature">Literature</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Medical">Medical</option>
                    <option value="Business">Business</option>
                  </select>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-7 px-8 mb-4">
            <div className="flex-1">
              <label
                className="text-lg font-semibold text-primary"
                htmlFor="author"
              >
                Author Name
              </label>
              <br />
              <input
                type="text"
                required
                {...register("author")}
                placeholder="Enter Author Name"
                className="w-full py-3 px-4 my-2 rounded border border-primary focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-500 dark:text-white"
              />
            </div>
            <div className="flex-1">
              <label
                className="text-lg font-semibold text-primary"
                htmlFor="quantity"
              >
                Book Quantity
              </label>{" "}
              <br />
              <input
                type="number"
                min={0}
                onWheel={(e) => e.target.blur()}
                {...register("quantity")}
                required
                placeholder="Enter Book Quantity"
                className="w-full py-3 px-4 my-2 rounded border border-primary focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-500 dark:text-white"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-7 px-8 mb-4">
            <div className="flex-1">
              <label
                className="text-lg font-semibold text-primary"
                htmlFor="photo"
              >
                Book Cover URL
              </label>
              <br />
              <input
                required
                type="text"
                {...register("photo")}
                placeholder="Enter Book Cover URL"
                className="w-full py-3 px-4 my-2 rounded border border-primary focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-500 dark:text-white"
              />
            </div>
            <div className="flex-1">
              <label
                className="text-lg font-semibold text-primary"
                htmlFor="chef"
              >
                Book Rating
              </label>
              <br />
              <Controller
                name="rating"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="my-2 border border-primary text-base focus:outline-none focus:ring block w-full py-3 px-4 rounded focus:ring-blue-500 dark:bg-gray-500 dark:text-white"
                  >
                    <option value="">Select Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                )}
              />
            </div>
          </div>
          <div className="flex-col lg:flex-row px-8 mb-4 flex gap-7">
            <div className="flex-1">
              <label
                className="text-lg font-semibold text-primary"
                htmlFor="description"
              >
                Book Description
              </label>
              <input
                required
                type="text"
                {...register("description")}
                placeholder="Enter Book Description"
                className="w-full py-3 px-4 my-2 rounded border border-primary focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-500 dark:text-white"
              />
            </div>
            <div className="flex-1">
              <label
                className="text-lg font-semibold text-primary"
                htmlFor="description"
              >
                Book Preview Text
              </label>
              <input
                required
                type="text"
                {...register("preview")}
                placeholder="Enter Book Preview Text"
                className="w-full py-3 px-4 my-2 rounded border border-primary focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-500 dark:text-white"
              />
            </div>
          </div>
          <div className="pb-12 text-white w-1/3 md:w-1/5 mx-auto">
            <input
              type="submit"
              value="Add Book"
              className="bg-primary w-full py-3 text-xl md:text-2xl rounded-lg hover:bg-[#1083A7]"
            />
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddBooks;
