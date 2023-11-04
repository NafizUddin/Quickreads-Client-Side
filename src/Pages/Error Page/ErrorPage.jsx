import Lottie from "lottie-react";
import errorAnimate from "../../assets/404Animation.json";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const ErrorPage = () => {
  return (
    <div className="mb-12 xl:min-h-screen xl:mb-0">
      <div className="flex flex-col items-center justify-center gap-4 xl:gap-5">
        <div className="mt-10 md:mt-0">
          <Lottie
            animationData={errorAnimate}
            loop={true}
            className="w-[400px] md:w-[550px]"
          />
        </div>

        <p className="text-4xl lg:text-5xl font-semibold text-center">
          Oops! That page can&apos;t be found.
        </p>
        <hr className="w-[300px] mx-auto my-2 xl:my-8 border-t-2 border-primary" />
        <p className="text-center max-w-sm md:max-w-md">
          We&apos;re really sorry but we can&apos;t seem to find the page you
          were looking for.
        </p>
        <Link to="/">
          <button className="px-6 py-3 bg-primary text-white rounded-md flex gap-2 items-center">
            <span className="text-xl">
              <BsArrowLeft />
            </span>
            Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
