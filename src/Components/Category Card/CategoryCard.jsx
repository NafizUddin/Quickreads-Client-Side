import PropTypes from "prop-types";

const CategoryCard = ({ singleCategory }) => {
  const { category, image } = singleCategory;

  return (
    <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md dark:bg-gray-500 hover:scale-105">
      <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
        <img src={image} className="h-[300px] object-cover w-full rounded-md" />
      </div>
      <div className="p-6">
        <h4 className="block text-4xl antialiased font-semibold leading-snug tracking-normal text-center dark:text-white">
          {category}
        </h4>
      </div>
      <div className="flex justify-center items-center pb-10">
        <button className="bg-primary hover:bg-[#1083A7] px-4 py-3 rounded-lg text-white">
          View Books
        </button>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  singleCategory: PropTypes.object.isRequired,
};

export default CategoryCard;
