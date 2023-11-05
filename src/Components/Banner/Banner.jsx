import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Navbar from "../Main Navbar/Navbar";
import logo from "../../assets/Images/Logos/LightLogo-removebg-preview.png";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

const Banner = () => {
  const SwiperNavButtons = () => {
    const swiper = useSwiper();

    return (
      <div className="flex gap-4">
        <button
          className="p-5 bg-primary rounded-full"
          onClick={() => swiper.slidePrev()}
        >
          <BsArrowLeft className="text-white text-xl"></BsArrowLeft>
        </button>
        <button
          className="p-5 bg-primary rounded-full"
          onClick={() => swiper.slideNext()}
        >
          <BsArrowRight className="text-white text-xl"></BsArrowRight>
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <div className="">
        <Navbar></Navbar>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative md:h-[600px] lg:h-[600px]">
            <img
              src="https://i.ibb.co/7tf4y7r/inaki-del-olmo-NIJu-EQw0-RKg-unsplash.jpg"
              className="absolute inset-0 object-cover w-full h-full"
              alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75 h-full">
              <div className="flex flex-col justify-center items-center pt-28 pb-16 lg:py-20 md:pt-32 md:pb-0">
                <img
                  src={logo}
                  className="w-[220px] block md:hidden pb-5"
                ></img>
                <h1 className="text-center text-white mx-4 text-3xl md:text-4xl xl:text-5xl">
                  Empower Your Mind with Knowledge
                </h1>
                <p className="text-center text-white md:text-xl pt-10 leading-relaxed md:max-w-2xl md:mx-auto mx-5">
                  Welcome to <span className="text-primary">QuickReads</span>,
                  unleash the power of knowledge by accessing a world of books
                  in our library. Let books be your key to empowerment.Dive into
                  our digital resources for even more learning opportunities.
                </p>
                <div className="my-8">
                  <button className="bg-primary hover:bg-[#1083A7] px-4 py-3 rounded-lg text-white">
                    Learn More
                  </button>
                </div>

                <div className="lg:mt-9">
                  <SwiperNavButtons></SwiperNavButtons>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative md:h-screen lg:h-[600px]">
            <img
              src="https://i.ibb.co/MGm1Tyr/fallon-michael-qml-GWIa-Igpo-unsplash.jpg"
              className="absolute inset-0 object-cover w-full h-full"
              alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75 h-full">
              <div className="flex flex-col justify-center items-center pt-28 pb-16 lg:py-20 md:pt-32 md:pb-0">
                <img
                  src={logo}
                  className="w-[220px] block md:hidden pb-5"
                ></img>
                <h1 className="text-center text-white mx-4 text-3xl md:text-4xl xl:text-5xl">
                  Discover Your Next Adventure
                </h1>
                <p className="text-center text-white md:text-xl pt-10 leading-relaxed max-w-2xl mx-auto">
                  Welcome to <span className="text-primary">QuickReads</span>,
                  explore our vast library and embark on a literary journey
                  through our extensive collection of books. Your next adventure
                  awaits! Visit our book library to discuss your latest finds.
                </p>
                <div className="my-8">
                  <button className="bg-primary hover:bg-[#1083A7] px-4 py-3 rounded-lg text-white">
                    Learn More
                  </button>
                </div>
                <div className="lg:mt-9">
                  <SwiperNavButtons></SwiperNavButtons>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative md:h-screen lg:h-[600px]">
            <img
              src="https://i.ibb.co/gFgKfZN/devon-divine-Hzp-1ua8-DVE-unsplash.jpg"
              className="absolute inset-0 object-cover w-full h-full"
              alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75 h-full">
              <div className="flex flex-col justify-center items-center pt-28 pb-16 lg:py-20 md:pt-32 md:pb-0">
                <img
                  src={logo}
                  className="w-[220px] block md:hidden pb-5"
                ></img>
                <h1 className="text-center text-white mx-4 text-3xl md:text-4xl xl:text-5xl">
                  The Learning Oasis
                </h1>
                <p className="text-center text-white md:text-xl pt-10 leading-relaxed max-w-2xl mx-auto">
                  Welcome to <span className="text-primary">QuickReads</span>,
                  where learning meets convenience. Explore our diverse
                  collection of books and unlock your potential. Stay engaged
                  with our community events and discussions.
                </p>
                <div className="my-8">
                  <button className="bg-primary hover:bg-[#1083A7] px-4 py-3 rounded-lg text-white">
                    Learn More
                  </button>
                </div>
                <div className="lg:mt-9">
                  <SwiperNavButtons></SwiperNavButtons>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative md:h-screen lg:h-[600px]">
            <img
              src="https://i.ibb.co/Kq4jyGD/prateek-katyal-Yz-GQv-ASe-Mk-unsplash.jpg"
              className="absolute inset-0 object-cover w-full h-full"
              alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-60 h-full">
              <div className="flex flex-col justify-center items-center pt-28 pb-16 lg:py-20 md:pt-32 md:pb-0">
                <img
                  src={logo}
                  className="w-[220px] block md:hidden pb-5"
                ></img>
                <h1 className="text-center text-white mx-4 text-3xl md:text-4xl xl:text-5xl">
                  Organize, Explore, Thrive
                </h1>
                <p className="text-center text-white md:text-xl pt-10 leading-relaxed max-w-2xl mx-auto">
                  Welcome to <span className="text-primary">QuickReads</span>,
                  streamline your library management and dive into a world of
                  knowledge. Organize, explore, and thrive with our library
                  resources. Attend our author events for a deeper connection to
                  literature.
                </p>
                <div className="my-8">
                  <button className="bg-primary hover:bg-[#1083A7] px-4 py-3 rounded-lg text-white">
                    Learn More
                  </button>
                </div>
                <div className="lg:mt-9">
                  <SwiperNavButtons></SwiperNavButtons>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
