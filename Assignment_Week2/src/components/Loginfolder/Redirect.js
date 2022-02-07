import { selectAuthToken } from "../../reducers/authSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Redirect = ({ children }) => {
  const authToken = useSelector(selectAuthToken);

  return authToken ? <Navigate to="/" replace /> : children;
};

export default Redirect;
