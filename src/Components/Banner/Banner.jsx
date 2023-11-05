import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Navbar from "../Main Navbar/Navbar";
import logo from "../../assets/Images/Logos/LightLogo-removebg-preview.png";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import bannerJson from "../../jsons/bannerInfo.json";
import { TypeAnimation } from "react-type-animation";

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
        {bannerJson?.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative md:h-[600px] lg:h-auto">
              <img
                src={banner.bannerImg}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
              />
              <div className="relative bg-gray-900 bg-opacity-75 h-full">
                <div className="flex flex-col justify-center items-center pt-40 pb-16 lg:pt-20 lg:pb-10 md:pt-36 md:pb-0">
                  <img
                    src={logo}
                    className="w-[220px] block md:hidden pb-5"
                  ></img>
                  <h1 className="text-center text-white mx-4 text-3xl md:text-4xl xl:text-5xl">
                    {banner.heading}
                  </h1>
                  <p className="text-center text-white md:text-xl pt-10 leading-relaxed md:max-w-2xl md:mx-auto mx-5">
                    {/* Welcome to{" "}
                    <span className="text-primary mr-2">QuickReads,</span>
                    {banner.description} */}
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed once, initially
                        `Welcome to QuickReads, ${banner.description}`,
                        1000,
                      ]}
                      speed={50}
                      repeat={Infinity}
                      wrapper="span"
                      cursor={false}
                    />
                  </p>
                  <div className="my-8">
                    <button className="bg-primary hover:bg-[#1083A7] px-4 py-3 rounded-lg text-white">
                      Learn More
                    </button>
                  </div>

                  <div className="md:mt-8 lg:mt-9">
                    <SwiperNavButtons></SwiperNavButtons>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
