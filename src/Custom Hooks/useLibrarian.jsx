import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosInterceptorsSecure from "./useAxiosInterceptorsSecure";

const useLibrarian = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosInterceptorsSecure();

  const { data: isLibrarian, isPending: isLibrarianLoading } = useQuery({
    queryKey: [user?.email, "isLibrarian"],
    enabled: !loading,
    queryFn: async () => {
      console.log("asking or checking is admin", user);
      const res = await axiosSecure.get(`/api/users/librarian/${user.email}`);
      // console.log(res.data);
      return res.data?.librarian;
    },
  });
  return { isLibrarian, isLibrarianLoading };
};

export default useLibrarian;
