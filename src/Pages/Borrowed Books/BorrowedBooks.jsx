import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Main Navbar/Navbar";

const BorrowedBooks = () => {
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
            <h1 className="text-white text-5xl md:text-6xl font-bold">
              Borrowed Books
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BorrowedBooks;
