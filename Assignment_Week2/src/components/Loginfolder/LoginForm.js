import classes from "./LoginForm.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/authSlice";

const LoginFrom = () => {
  const dispatch = useDispatch();
  const [loggingIn, setLoggingIn] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setLoggingIn(true);

    fetch("https://run.mocky.io/v3/afa1b987-0835-4ee1-9375-6f57caa5c609")

      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoggingIn(false);
        dispatch(login(data.token));
        localStorage.setItem("authToken", data.token);
      })
      .catch((error) => {
        setLoggingIn(false);
        console.log(
          "https://run.mocky.io/v3/afa1b987-0835-4ee1-9375-6f57caa5c609 this api should retrun the data in this format only then this would work {'token': 'eW91J3JlIGFuIGF3ZXNvbWUgZGV2ZWxvcGVy'}",
          error
        );
        alert(
          "https://run.mocky.io/v3/afa1b987-0835-4ee1-9375-6f57caa5c609 this api should retrun the data in this format only then this would work {'token': 'eW91J3JlIGFuIGF3ZXNvbWUgZGV2ZWxvcGVy'}" +
            error
        );
      });
  };
  return (
    <div className={classes.container}>  
      <form className={classes.form} onSubmit={submitHandler}>
        <h3>Email</h3>
        <input required type="email" placeholder="abc@xyz.com" />
        <h3>Password</h3>
        <input required type="password" placeholder="Enter Password" />
        <button type="submit" className={classes.submit_btn}>
          {loggingIn ? <span>Loging In</span> : <span>Login/Sign Up</span>}
        </button>
      </form>
    </div>
  );
};

export default LoginFrom;
