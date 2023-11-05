import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const useAxiosInterceptorsSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logOut()
            .then(() => {
              Swal.fire("Ooopss!", "You have been logged out!", "success");
              navigate("/login");
            })
            .catch((error) => console.log(error.code));
        }
      }
    );
  }, [logOut, navigate]);

  return axiosSecure;
};

export default useAxiosInterceptorsSecure;
