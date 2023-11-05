import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import testimonialJson from "../../jsons/testimonialInfo.json";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <div className="my-16">
      <div className="relative md:h-[650px] lg:h-auto">
        <img
          src="https://i.ibb.co/T44tmTD/will-van-wingerden-dsv-Jgi-BJTOs-unsplash.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75 h-full">
          <h1 className="text-center text-5xl text-white font-bold pt-20">
            What People Say
          </h1>
          <div className="flex items-center py-7 w-1/4 mx-auto">
            <div className="w-1/2 h-1 bg-white"></div>
            <div className="w-6 h-6 bg-white transform rotate-45"></div>
            <div className="w-1/2 h-1 bg-white"></div>
          </div>

          <div className="pt-3 pb-12 md:w-11/12 xl:w-10/12 mx-auto">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                clickable: true,
              }}
              slidesPerView={1}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {testimonialJson?.map((test, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col justify-center items-center gap-3 w-full h-[500px] md:h-[390px] xl:h-[450px] text-white">
                    <img
                      src={test.avatar}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <h1 className="text-2xl pt-2 font-semibold">{test.name}</h1>
                    <h1 className="text-lg font-medium pt-1">
                      {test.profession}
                    </h1>
                    <p className="text-center pt-11 md:pt-6 xl:pt-0 leading-relaxed md:max-w-2xl md:mx-auto mx-5">
                      {test.quotes}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
