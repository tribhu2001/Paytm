import { selectAuthToken } from "../../reducers/authSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const Authorization = ({ children }) => {
  const authToken = useSelector(selectAuthToken);

  return authToken ? children : <Navigate to="/Login" replace />;
};

export default Authorization;
