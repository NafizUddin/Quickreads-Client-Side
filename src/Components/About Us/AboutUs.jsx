import { BsPersonVcard } from "react-icons/bs";
import { LiaMedalSolid } from "react-icons/lia";
import { IoBookSharp } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutUs = () => {
  return (
    <div className="my-14">
      <h1 className="text-center text-5xl text-primary font-bold">About Us</h1>
      <div className="flex items-center py-7 w-1/3 mx-auto">
        <div className="w-1/2 h-1 bg-primary"></div>
        <div className="w-6 h-6 bg-primary transform rotate-45"></div>
        <div className="w-1/2 h-1 bg-primary"></div>
      </div>
      <p className="md:max-w-xl md:mx-auto mx-6 text-gray-500 text-center dark:text-white">
        Welcome to <span className="text-primary">QuickReads</span>,Your gateway
        to knowledge and literary exploration. We&apos;re here to fuel your
        curiosity and make learning a joy.Embark on this literary journey with
        us.
      </p>
      <div
        data-aos="fade-up"
        data-aos-duration="1400"
        className="grid grid-cols-1 xl:grid-cols-8 gap-6 py-8"
      >
        <div className="xl:col-span-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:mx-7 xl:mx-0">
            <div className="relative flex flex-col mt-6 text-gray-700 shadow-md md:w-[470px] lg:w-auto xl:w-96 rounded-xl bg-clip-border mx-auto">
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="text-primary text-5xl">
                    <BsPersonVcard></BsPersonVcard>
                  </div>
                  <hr className="w-[120px] my-2 xl:my-8 border-t-2 border-primary" />
                </div>

                <h5 className="block mb-2 text-2xl antialiased font-semibold leading-snug tracking-normal dark:text-white">
                  Membership Card
                </h5>
                <p className="block text-base antialiased leading-relaxed  dark:text-white text-gray-500">
                  Your library member card: Your passport to endless learning
                  and exploration.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col mt-6 text-gray-700 shadow-md md:w-[470px] lg:w-auto xl:w-96 rounded-xl bg-clip-border mx-auto">
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="text-primary text-5xl">
                    <LiaMedalSolid></LiaMedalSolid>
                  </div>
                  <hr className="w-[120px] my-2 xl:my-8 border-t-2 border-primary" />
                </div>

                <h5 className="block mb-2 text-2xl antialiased font-semibold leading-snug tracking-normal dark:text-white">
                  High Quality Books
                </h5>
                <p className="block text-base antialiased leading-relaxed dark:text-white text-gray-500">
                  Discover a treasure trove of high-quality books that inspire
                  and captivate at our library.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col mt-6 text-gray-700 shadow-md md:w-[470px] lg:w-auto xl:w-96 rounded-xl bg-clip-border mx-auto">
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="text-primary text-5xl">
                    <IoBookSharp></IoBookSharp>
                  </div>
                  <hr className="w-[120px] my-2 xl:my-8 border-t-2 border-primary" />
                </div>

                <h5 className="block mb-2 text-2xl antialiased font-semibold leading-snug tracking-normal dark:text-white">
                  Free All Books
                </h5>
                <p className="block antialiased leading-relaxed  dark:text-white text-gray-500">
                  Explore our library&apos;s vast collection of books, all
                  freely accessible to kindle your imagination and feed your
                  curiosity.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col mt-6 text-gray-700 shadow-md md:w-[470px] lg:w-auto xl:w-96 rounded-xl bg-clip-border mx-auto">
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="text-primary text-5xl">
                    <LiaBookSolid></LiaBookSolid>
                  </div>
                  <hr className="w-[120px] my-2 xl:my-8 border-t-2 border-primary" />
                </div>

                <h5 className="block mb-2 text-2xl antialiased font-semibold leading-snug tracking-normal dark:text-white">
                  Up To Date Books
                </h5>
                <p className="block text-base antialiased leading-relaxed  dark:text-white text-gray-500">
                  Stay current and informed with our library&apos;s ever-growing
                  selection of up-to-date books, keeping your knowledge sharp
                  and relevant.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-3 pt-3">
          <div className="mb-8 lg:mb-0 relative w-full h-[300px] lg:h-full">
            <img
              src="https://i.ibb.co/ZHWcJ77/emil-widlund-xrbb-XIXAWY0-unsplash.jpg"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="relative bg-gray-900 bg-opacity-70 h-full">
              <h1
                className="text-white font-bold text-center text-2xl  md:text-4xl lg:text-4xl py-28 md:py-28 lg:py-44 xl:py-52 px-2
               md:px-20 lg:px-7"
              >
                Explore Our Library: Where Words Come to Life
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
