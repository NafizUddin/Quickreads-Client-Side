import { useQuery } from "@tanstack/react-query";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Main Navbar/Navbar";
import useAxiosInterceptorsSecure from "../../Custom Hooks/useAxiosInterceptorsSecure";
import Loading from "../../Components/Loading Component/Loading";
import useAuth from "../../Custom Hooks/useAuth";
import Swal from "sweetalert2";

const BorrowedBooks = () => {
  const { user } = useAuth();
  // console.log(user.email);

  const axiosSecure = useAxiosInterceptorsSecure();
  // const [updatedQuantity, setUpdatedQuantity] = useState(null);

  const {
    data: borrowedBooks,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["borrow"],
    queryFn: async () =>
      axiosSecure
        .get(`/api/borrowedBooks?email=${user?.email}`)
        .then((data) => data.data),
  });

  // console.log(borrowedBooks);

  const handleReturnBook = async (borrowedBooks) => {
    let updatedQuantity;

    await axiosSecure
      .get(`/api/books/bookName/${borrowedBooks?.bookName}`)
      .then((res) => {
        const quantityInNum = parseInt(res.data?.quantity);
        // setUpdatedQuantity(quantityInNum);
        updatedQuantity = quantityInNum + 1;
      });

    await axiosSecure
      .delete(`/api/borrowedBooks/${borrowedBooks?._id}`)
      .then((res) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, return it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            if (res.data.deletedCount > 0) {
              await axiosSecure
                .patch(`/api/books/singleBook/${borrowedBooks?.bookName}`, {
                  quantity: updatedQuantity,
                })
                .then((res) => {
                  if (res.data.modifiedCount > 0) {
                    Swal.fire(
                      "Returned!",
                      "Your book has been returned!",
                      "success"
                    );
                    window.location.reload();
                    refetch();
                  }
                });
            }
          }
        });
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Navbar />
      <div className="relative h-[300px] md:h-[250px] mb-16 mt-2">
        <img
          src="https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="absolute inset-0 object-cover object-center w-full h-full rounded-md"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-60 h-full rounded-md">
          <div className="flex items-center justify-center h-full">
            <h1 className="text-white text-5xl md:text-6xl font-bold text-center">
              Borrowed Books
            </h1>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto my-8 pb-20 border-gray-300 border-2 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 mx-6 xl:mx-0">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <h1 className="md:text-xl">Sl No.</h1>
              </th>
              <th>
                <h1 className="md:text-xl">Book Cover</h1>
              </th>
              <th>
                <h1 className="md:text-xl">Book Name</h1>
              </th>
              <th>
                <h1 className="md:text-xl">Borrow Date</h1>
              </th>
              <th>
                <h1 className="md:text-xl">Return Date</h1>
              </th>
              <th>
                <h1 className="md:text-xl">Action</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {borrowedBooks?.map((singleBook, index) => (
              <tr key={singleBook._id}>
                <th>
                  <span className="text-xl">{index + 1}</span>
                </th>
                <td>
                  <img src={singleBook?.bookImage} className="w-20" />
                </td>
                <td>
                  <h1 className="md:text-xl font-semibold">
                    {singleBook?.bookName}
                  </h1>
                </td>
                <td>
                  <h1 className="md:text-xl font-semibold">
                    {singleBook?.borrowDate}
                  </h1>
                </td>
                <td>
                  <h1 className="md:text-xl font-semibold">
                    {singleBook?.returnDate}
                  </h1>
                </td>
                <td>
                  <button
                    onClick={() => handleReturnBook(singleBook)}
                    className="px-4 py-2 rounded-full bg-primary text-white  text-xs md:text-base"
                  >
                    Return
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default BorrowedBooks;
