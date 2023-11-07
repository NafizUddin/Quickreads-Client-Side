import PropTypes from "prop-types";
import { BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";

const BooksCardDetailsPage = ({ book }) => {
  const { _id, name, author, photo, bookCategory, rating, quantity } = book;
  return (
    <div>
      <div
        href="#"
        className="flex items-center border-gray-300 border-2 rounded-lg shadow flex-row lg:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-primary hover:border-primary hover:-translate-y-2 md:gap-4"
      >
        <img
          className="object-cover p-4 h-[260px] w-[160px]"
          src={photo}
          alt=""
        />
        <div className="flex flex-col justify-between py-6 leading-normal">
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex-grow pr-2 lg:h-[65px]">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            By {author}
          </p>
          <div className="md:text-xl flex items-center gap-3">
            <span className="font-medium">Rating: </span>
            <span className="mt-1">
              <Rating
                initialRating={rating}
                fullSymbol={
                  <BsFillStarFill className="text-[#FF9529]"></BsFillStarFill>
                }
                emptySymbol={<BsStar className="text-[#FF9529]"></BsStar>}
                readonly
              />
            </span>
          </div>
          <p className="md:text-xl mt-2">
            <span className="font-medium">Category:</span>{" "}
            <span>{bookCategory}</span>
          </p>
          <p className="md:text-xl mt-2">
            <span className="font-medium">Quantity:</span>{" "}
            <span>{quantity}</span>
          </p>
          <div className="mt-4">
            <Link to={`/bookDetails/${_id}`}>
              <button className="px-4 py-2 font-medium bg-primary text-white rounded-2xl flex gap-2 items-center">
                Book Details <FiBookOpen className="mt-1 text-lg" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

BooksCardDetailsPage.propTypes = {
  book: PropTypes.object,
};

export default BooksCardDetailsPage;
