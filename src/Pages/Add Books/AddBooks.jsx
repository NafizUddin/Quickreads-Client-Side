import Swal from "sweetalert2";
import logo from "../../assets/Images/Logos/LightLogo-removebg-preview.png";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Main Navbar/Navbar";
import { Controller, useForm } from "react-hook-form";
import "./addBooks.css";
import useAxiosInterceptorsSecure from "../../Custom Hooks/useAxiosInterceptorsSecure";

const AddBooks = () => {
  const { register, control, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosInterceptorsSecure();

  const handleAddItems = (data) => {
    console.log(data);

    axiosSecure.post("/api/books", data).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire("Good job!", "You added a new item", "success");
        reset();
      }
    });

    // fetch("https://tastecraft-hub-server-side.vercel.app/items", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(item),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       Swal.fire("Good job!", "You added a new item", "success");
    //       form.reset();
    //     }
    //   });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-32 lg:mt-14 dark:text-white">
        <img src={logo} className="w-[300px] block md:hidden"></img>
        <h1 className="text-primary text-center text-4xl">Add New Books</h1>
        <p className="text-center py-3 mx-8">
          <span className="text-primary">QuickReads</span>: Your Gateway to
          Knowledge and Imagination
        </p>
        <p className="text-center lg:max-w-2xl lg:mx-auto mx-6">
          Discover a world of knowledge and endless imagination at your
          community&apos;s literary sanctuary, where books invite you to unleash
          your curiosity one page at a time.
        </p>
        <form
          onSubmit={handleSubmit(handleAddItems)}
          className="w-11/12 mx-auto my-8"
        >
          <div className="flex gap-7 px-8 mb-4">
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
                    <option value="Comics">Comics</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Medical">Medical</option>
                    <option value="Business">Business</option>
                  </select>
                )}
              />
              {/* <select
                required
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="my-2 border border-primary text-base focus:outline-none focus:ring block w-full py-3 px-4 rounded focus:ring-blue-500 dark:bg-gray-500 dark:text-white"
              >
                <option value="">Select a book category</option>
                <option value="History">History</option>
                <option value="Science">Science</option>
                <option value="Comics">Comics</option>
                <option value="Mystery">Mystery</option>
                <option value="Medical">Medical</option>
                <option value="Business">Business</option>
              </select> */}
            </div>
          </div>
          <div className="flex gap-7 px-8 mb-4">
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
                {...register("quantity")}
                required
                placeholder="Enter Book Quantity"
                className="w-full py-3 px-4 my-2 rounded border border-primary focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-500 dark:text-white"
              />
            </div>
          </div>
          <div className="flex gap-7 px-8 mb-4">
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
              {/* <select
                required
                onChange={(e) => setSelectedRating(e.target.value)}
                className="my-2 border border-primary text-base focus:outline-none focus:ring block w-full py-3 px-4 rounded focus:ring-blue-500 dark:bg-gray-500 dark:text-white"
              >
                <option value="">Select Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select> */}
            </div>
          </div>
          <div className="px-8 mb-4">
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
          <div className="pb-12 text-white w-1/3 md:w-1/5 mx-auto">
            <input
              type="submit"
              value="Add Item"
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
