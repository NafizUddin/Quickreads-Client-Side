import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Custom Hooks/useAuth";
import PropTypes from "prop-types";
import useLibrarian from "../Custom Hooks/useLibrarian";
import Loading from "../Components/Loading Component/Loading";

const LibrarianRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const { isLibrarian, isLibrarianLoading } = useLibrarian();

  if (loading || isLibrarianLoading) {
    return <Loading />;
  }

  if (user && isLibrarian) {
    return children;
  }

  return <Navigate state={location.pathname} to="/"></Navigate>;
};

LibrarianRoute.propTypes = {
  children: PropTypes.node,
};

export default LibrarianRoute;
