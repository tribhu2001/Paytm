import { Navigate } from "react-router-dom";
import { selectAuthToken } from "../../reducers/authSlice";
import { useSelector } from "react-redux";
import InvalidPathPage from "../../pages/InvalidPathPage";

const NotValidPath = ({ children }) => {
  const authToken = useSelector(selectAuthToken);

  return authToken ? <InvalidPathPage /> : <Navigate to="/login" replace />;
};

export default NotValidPath;
