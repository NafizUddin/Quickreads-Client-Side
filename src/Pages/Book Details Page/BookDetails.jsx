import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Main Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Rating from "react-rating";
import { BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";
import { GiRead } from "react-icons/gi";

const BookDetails = () => {
  const singleBook = useLoaderData();

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
                <button className="px-5 py-3 font-medium bg-primary text-white rounded-2xl flex gap-2 items-center text-xl">
                  Borrow Book <FiBookOpen className="mt-1 text-lg" />
                </button>
                <Link>
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
        <p className="w-11/12 mx-auto text-xl text-gray-500">
          {singleBook?.description}
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BookDetails;
