import { useEffect } from "react";
import LoginForm from "../../Components/Login Form/LoginForm";
import login from "../../assets/loginAnimation.json";
import Lottie from "lottie-react";
import AuthNavbar from "../../Components/AuthNavbar/AuthNavbar";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AuthNavbar></AuthNavbar>
      <div className="flex flex-col lg:flex-row lg:gap-10 py-8">
        <div className="flex-1">
          <div className="flex justify-center items-center lg:py-10">
            <Lottie animationData={login} loop={true} className="w-[550px]" />
          </div>
        </div>
        <div className="flex-1">
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
};

export default Login;
