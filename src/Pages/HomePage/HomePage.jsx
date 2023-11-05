import AboutUs from "../../Components/About Us/AboutUs";
import Banner from "../../Components/Banner/Banner";
import BookCategory from "../../Components/Book Category/BookCategory";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonial/Testimonial";
import WhyChooseUs from "../../Components/Why Choose Us/WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <BookCategory></BookCategory>
      <AboutUs></AboutUs>
      <WhyChooseUs></WhyChooseUs>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
