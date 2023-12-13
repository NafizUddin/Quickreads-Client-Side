import axios from "axios";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const useAxiosInterceptorsSecure = () => {
  // console.log(useAuth());
  const { logOut } = useAuth();
  // const { logOut } = useContext(AuthContext);

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
              <Navigate to="/login"></Navigate>;
            })
            .catch((error) => console.log(error.code));
        }
      }
    );
  }, [logOut]);

  return axiosSecure;
};

export default useAxiosInterceptorsSecure;
