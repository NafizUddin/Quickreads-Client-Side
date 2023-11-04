import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Custom Hooks/useAuth";

// import axios from "axios";

const LoginForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logInWithGoogle, logInWithGithub, signInUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin = () => {
    logInWithGoogle()
      .then(() => {
        Swal.fire("Success!", "You have logged in with Google!", "success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.code);
        // Swal.fire("Ooppss!", `${error.message}`, "error");
      });
  };

  const handleGithubLogin = () => {
    logInWithGithub()
      .then(() => {
        Swal.fire("Success!", "You have logged in with Github!", "success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.code);
        // Swal.fire("Ooppss!", `${error.message}`, "error");
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((res) => {
        const loggedInUser = res.user;
        console.log(loggedInUser);
        // const user = { email };
        // localStorage.setItem("userId", res.user.uid);
        // console.log(res.user.uid);

        navigate(location?.state ? location.state : "/");
        Swal.fire("Success!", "You have logged in successfully!", "success");

        // get access token
        // axios
        //   .post("http://localhost:3000/jwt", user, {
        //     withCredentials: true,
        //   })
        //   .then((res) => {
        //     console.log(res.data);
        //     if (res.data.success) {
        //       navigate(location?.state ? location.state : "/");
        //       Swal.fire(
        //         "Success!",
        //         "You have logged in successfully!",
        //         "success"
        //       );
        //     }
        //   });
      })
      .catch((error) => {
        Swal.fire("Ooppss!", "Your Email or Password didn't match", "error");
        console.log(error.code);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 mx-auto">
      <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight border-b pt-4 pb-6 dark:text-primary text-gray-900">
            Login to your account
          </h1>
          <form onSubmit={handleSignIn} className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-semibold dark:text-primary text-gray-900"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="bg-[#F3F3F3] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-500 dark:text-white"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-lg font-semibold dark:text-primary text-gray-900"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id=""
                  className="bg-[#F3F3F3] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-500 dark:text-white"
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
            </div>
            <div className="flex items-center justify-between my-5">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-500 "
                    aria-describedby="remember"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="dark:text-primary text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium dark:text-primary text-gray-900 hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="submit"
              value="Sign In"
              className="w-full text-white bg-[#13A5C9] hover:bg-[white] hover:outline hover:text-[#13A5C9] font-medium px-5 py-3 text-center my-2 dark:hover:bg-primary dark:hover:text-white"
            />
          </form>
          <div className="flex items-center justify-between">
            <hr className="w-36" />
            <span className="dark:text-primary text-gray-900 text-lg font-medium">
              OR
            </span>
            <hr className="w-36" />
          </div>
          <div className="flex items-center justify-center gap-4">
            <button onClick={handleGoogleLogin}>
              <FcGoogle className="text-3xl"></FcGoogle>
            </button>
            <button onClick={handleGithubLogin}>
              <BsGithub className="text-3xl"></BsGithub>
            </button>
          </div>
          <h1 className="text-center md:text-lg">
            Don&apos;t have an account?{" "}
            <Link to="/register">
              <span className="text-[#13A5C9] hover:underline">
                Create free account
              </span>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
