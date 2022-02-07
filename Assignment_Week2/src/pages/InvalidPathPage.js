import { Link } from "react-router-dom";
import classes from "./InvalidPathPage.module.css";

const InvalidPathPage = () => {
  return (
    <div className={classes.container}>
      <h2>
        Looks like you are lost in space.<Link to="/"> Click here</Link> to go home
      </h2>
    </div>
  );
};
export default InvalidPathPage;
