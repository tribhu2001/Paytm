import TodoList from "../components/Taskform/TodoList";
import classes from "./AllTasks.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, deleteChecked } from "../reducers/todoSlice";
const AllTasks = () => {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();
  const deleteCheckedHandler = () => {
    dispatch(deleteChecked());
  };
  return (
    <div className={classes.container}>
      <h1>To Do Tasks</h1>
      {todos.length !== 0 ? <TodoList /> : <h3>Please add tasks to show</h3>}
      {todos.length !== 0 ? (
        <button onClick={deleteCheckedHandler}>Delete Checked Tasks</button>
      ) : null}
    </div>
  );
};

export default AllTasks;