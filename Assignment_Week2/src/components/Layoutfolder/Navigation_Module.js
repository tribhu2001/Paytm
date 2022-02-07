import classes from "./Navigation_Module.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectAuthToken } from "../../reducers/authSlice";
import { Link } from "react-router-dom";
import { deleteAllTodos } from "../../reducers/todoSlice";

const Navigation_Module = () => {
  const authToken = useSelector(selectAuthToken);
  const dispath = useDispatch();
  const LogoutHandler = (e) => {
    dispath(logout());
    dispath(deleteAllTodos());
    localStorage.clear();
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">To-Do Tasks Application</Link>
      </div>
      <nav>
        <ul>
          <li>{authToken && <Link to="/create_task">Create Task</Link>}</li>
          <li>{authToken && <span onClick={LogoutHandler}>Log-out</span>}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation_Module;
