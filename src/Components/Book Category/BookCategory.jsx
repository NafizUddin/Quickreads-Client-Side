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
      <div
        data-aos="zoom-in-down"
        data-aos-duration="800"
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
