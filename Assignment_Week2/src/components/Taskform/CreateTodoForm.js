import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../../reducers/todoSlice";
import { useNavigate } from "react-router-dom";
import classes from "./CreateTaskForm.module.css";
const todayDate = () => {
  let presentDay = new Date();
  let y = presentDay.getFullYear();
  let m = presentDay.getMonth() + 1;
  let d = presentDay.getDate();
  
  if (d < 10) {
    d = "0" + d;
  }
  if (m < 10) {
    m = "0" + m;
  }

  presentDay = y + "-" + m + "-" + d;
  return presentDay;
};

const CreateTodoForm = ({ todo, formTitle, disabled }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const priorityRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const duedateRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = duedateRef.current.value;
    const enteredPriority = priorityRef.current.value;
    if (!enteredTitle.match(/^[0-9a-zA-Z]+$/)) {
      return alert("Enter alphanumeric Title");
    }
    if (todo) {
      dispatch(
        editTodo({
          id: todo.id,
          title: enteredTitle,
          description: enteredDescription,
          duedate: enteredDueDate,
          priority: enteredPriority,
          checked: todo.checked,
        })
      );
      alert("Edited Task successfully");
    } 
    else {
      dispatch(
        addTodo({
          id: new Date().getTime().toString(),
          title: enteredTitle,
          description: enteredDescription,
          duedate: enteredDueDate,
          priority: enteredPriority,
          checked: false,
        })
      );

      alert("Created Task successfully");
    }
    navigate("/");
  };
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        {formTitle ? <h1>{formTitle}</h1> : <h1>Create Task</h1>}
        <label>Title</label>
        <input
          maxLength="20"
          required
          type="text"
          placeholder="Title"
          ref={titleRef}
          defaultValue={todo ? todo.title : ""}
          disabled={disabled}
        />
        <label>Description</label>
        <textarea
          placeholder="Description"
          rows="4"
          cols="50"
          maxLength="100"
          ref={descriptionRef}
        ></textarea>
        <label>Due Date</label>
        <input
          type="date"
          min={todayDate()}
          required
          ref={duedateRef}
        />
        <label>Priority</label>
        <select
          required
          ref={priorityRef}
          defaultValue= {todo? todo.priority : "Medium"}
          disabled={disabled}
        >
          <option>Medium</option>
          <option>High</option>
          <option>Low</option>
        </select>
        <button type="submit" className={classes.sub_button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTodoForm;
