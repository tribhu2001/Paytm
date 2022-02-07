import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../Item/Item";
import classes from "./TodoItem.module.css";
import {
  deleteTodo,
  setCheckedFalse,
  setCheckedTrue,
} from "../../reducers/todoSlice";

const dueDate = (duedate) => {
  let today = new Date().setHours(0, 0, 0, 0);
  let duedateInDate = new Date(duedate).setHours(0, 0, 0, 0);
  if (today < duedateInDate) {
    return "white";
  } else if (today > duedateInDate) {
    return "red";
  } else {
    return "yellow";
  }
};

const TodoItem = ({ id, title, description, duedate, priority, checked }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const DeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  const selectHandler = () => {
    if (checked) {
      dispatch(setCheckedFalse(id));
    } else {
      dispatch(setCheckedTrue(id));
    }
  };

  const gotoEditPage = () => {
    navigate(`/update-task/${id}`);
  };

  return (
    <li className={classes.todo_container}>
      <Card className={dueDate(duedate)}>
        <div className={classes.todo}>
          <input type="checkbox" onChange={selectHandler} checked={checked} />
          <div className={classes.single_line}>
            <h3>Title : {title}</h3>
          </div>
          <p>Due Date : {duedate}</p>
          <p>Priority : {priority}</p>
          <div
            className={
              dueDate(duedate) !== "white"
                ? classes.actions
                : classes.action_white
            }
          >
            <button onClick={gotoEditPage}>Edit Task</button><br/>
            <button onClick={DeleteTodo}>Delete Task</button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default TodoItem;
