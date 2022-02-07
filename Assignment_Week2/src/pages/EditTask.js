import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTodos } from "../reducers/todoSlice";
import CreateTodoForm from "../components/Taskform/CreateTodoForm";

const EditTask = () => {
  const { task_id } = useParams();
  const todos = useSelector(getTodos);
  const todo_array = todos.filter((todo) => todo.id === task_id);
  const todo = todo_array[0];
  return <CreateTodoForm todo={todo} formTitle="Edit Todo" disabled={true} />;
};

export default EditTask;
