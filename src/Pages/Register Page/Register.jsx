import { useEffect } from "react";
import signUpAnimation from "../../assets/signupAnimation.json";
import RegisterForm from "../../Components/Register Form/RegisterForm";
import AuthNavbar from "../../Components/AuthNavbar/AuthNavbar";
import Lottie from "lottie-react";

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AuthNavbar></AuthNavbar>
      <div className="flex flex-col lg:flex-row-reverse lg:gap-2 py-8">
        <div className="flex-1 pt-7">
          <div className="flex justify-center items-center lg:py-12">
            <Lottie
              animationData={signUpAnimation}
              loop={true}
              className="w-[500px] mx-8"
            />
          </div>
        </div>
        <div className="flex-1">
          <RegisterForm></RegisterForm>
        </div>
      </div>
    </div>
  );
};

export default Register;
