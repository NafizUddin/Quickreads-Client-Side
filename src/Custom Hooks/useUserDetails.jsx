import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosInterceptorsSecure from "./useAxiosInterceptorsSecure";

const useUserDetails = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosInterceptorsSecure();
  const {
    data: loadedUser,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["donor", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/users/${user?.email}`);
      return res.data;
    },
  });

  return { loadedUser, isLoading, refetch };
};

export default useUserDetails;
