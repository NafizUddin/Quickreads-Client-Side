import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import useAuth from "../../Custom Hooks/useAuth";
import Swal from "sweetalert2";
// import axios from "axios";

const RegisterForm = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [passValidation, setPassValidation] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoURL = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const termsAccepted = form.get("terms");
    setPassValidation(0);

    if (password.length < 6) {
      setPassValidation(1);
      return;
    } else if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+,\-./:;<=>?@[\\\]^_`{|}~]).*$/.test(
        password
      )
    ) {
      setPassValidation(2);
      return;
    } else if (!termsAccepted) {
      Swal.fire("Oopss", "Please Accept our terms and conditions", "warning");
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photoURL).then(() => {
          // const user = { email };
          navigate(location?.state ? location.state : "/");
          Swal.fire("Success!", "You have logged in successfully!", "success");
          // axios
          //   .post("http://localhost:3000/jwt", user, {
          //     withCredentials: true,
          //   })
          //   .then((res) => {
          //     console.log(res.data);
          //     if (res.data.success) {
          //     }
          //   });
        });
      })
      .catch((error) => {
        const errorCode = error.code.split("auth/")[1];
        Swal.fire("Ooppss!", `${errorCode}`, "error");
      });
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">
      <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-[#403F3F] border-b pt-4 pb-6">
            Create account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-lg font-semibold text-[#403F3F]"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="bg-[#F3F3F3] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="photo"
                className="block mb-2 text-lg font-semibold text-[#403F3F]"
              >
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                className="bg-[#F3F3F3] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Enter Photo URL"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-semibold text-[#403F3F]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="bg-[#F3F3F3] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-lg font-semibold text-[#403F3F]"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id=""
                  className="bg-[#F3F3F3] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  placeholder="••••••••"
                  required
                />
                <span
                  className="absolute right-3 top-3.5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              {passValidation === 1 && (
                <p className="mt-2 text-sm text-red-600">
                  <span className="font-medium">Oops!</span> Password should be
                  more than 6 characters.
                </p>
              )}
              {passValidation === 2 && (
                <p className="mt-2 text-sm text-red-600">
                  <span className="font-medium">Oops!</span> Password should
                  have an uppercase letter and a special character.
                </p>
              )}
            </div>
            <div className="flex items-start my-5">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                  aria-describedby="terms"
                  required=""
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-light text-[#706F6F]">
                  I accept the{" "}
                  <a
                    className="font-medium text-[#FF3811] hover:underline"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Sign Up"
              className="w-full text-white bg-[#FF3811] hover:bg-[white] hover:outline hover:text-[#FF3811] font-medium px-5 py-3 text-center my-2"
            />
            <h1 className="text-center text-lg">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-[#FF3811]">Sign In here</span>
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
