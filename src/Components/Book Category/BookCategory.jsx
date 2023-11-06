import { useEffect, useState } from "react";
import useAxiosInterceptorsSecure from "../../Custom Hooks/useAxiosInterceptorsSecure";
import CategoryCard from "../Category Card/CategoryCard";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const BookCategory = () => {
  const [categories, setCategories] = useState([]);
  const axiosSecure = useAxiosInterceptorsSecure();

  useEffect(() => {
    axiosSecure.get("/api/categories").then((res) => {
      setCategories(res.data);
    });
  }, [axiosSecure]);

  return (
    <div className="my-14">
      <h1 className="text-center text-5xl text-primary font-bold">
        Book Category
      </h1>
      <div className="flex items-center py-7 w-1/3 mx-auto">
        <div className="w-1/2 h-1 bg-primary"></div>
        <div className="w-6 h-6 bg-primary transform rotate-45"></div>
        <div className="w-1/2 h-1 bg-primary"></div>
      </div>

      <p className="md:max-w-xl md:mx-auto mx-6 text-gray-500 text-center dark:text-white">
        Dive into the gripping world of suspense, intrigue, and enigmatic plots
        with our collection of mystery novels. Whether you&apos;re a seasoned
        detective fiction enthusiast or a newcomer to the genre, you&apos;re
        sure to find thrilling tales that will keep you guessing until the very
        last page.
      </p>

      <div
        data-aos="zoom-in-down"
        data-aos-duration="500"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mx-6 xl:mx-auto mt-14 xl:w-11/12"
      >
        {categories?.map((singleCategory) => (
          <CategoryCard
            key={singleCategory._id}
            singleCategory={singleCategory}
          ></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default BookCategory;
