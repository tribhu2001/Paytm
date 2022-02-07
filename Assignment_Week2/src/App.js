import { Route, Routes } from "react-router-dom";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import LoginPage from "./pages/Login";
import Design from "./components/Layoutfolder/Layout";
import AllTasks from "./pages/AllTasks";
import NotValidPath from "./components/Loginfolder/InvalidPath";
import Authorization from "./components/Loginfolder/Authorization";
import Redirect from "./components/Loginfolder/Redirect";

const App = () => {
  return (
    <Design>
      <Routes>
      <Route
          path="/"
          exact
          element={<Authorization><AllTasks /></Authorization>}
        />
        <Route
          path="/login"
          exact
          element={<Redirect><LoginPage /></Redirect>}
        />
        <Route
          path="/create_task"
          exact
          element={<Authorization><CreateTask /></Authorization>}
        />
        <Route
          path="/update-task/:task_id"
          exact
          element={<Authorization><EditTask /></Authorization>}
        />
        <Route path="*" element={<NotValidPath />} />
      </Routes>
    </Design>
  );
};

export default App;
