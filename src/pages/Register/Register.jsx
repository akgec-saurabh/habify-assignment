import React, { useRef } from "react";
import classes from "./Register.module.css";
import logo from "../../assets/EFA_Registered Logo.png";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";

const Register = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      firstNameRef.current.value !== "" &&
      lastNameRef.current.value !== "" &&
      usernameRef.current.value !== "" &&
      emailRef.current.value !== "" &&
      passwordRef.current.value !== ""
    ) {
      dispatch(
        authActions.login({
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          username: usernameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      );

      dispatch(authActions.offLoginMode());
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <img className={classes.logo} src={logo} alt="logo" />
        <h2>Create a Emotional First Aid - Ennabler Account</h2>
        <div className={classes.desc}>
          By signin up you can start posting, replying to topics, earn badges,
          favorite, vote topics and many more
        </div>
        <div className={classes.half}></div>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.nameWrapper}>
          <div className={classes.firstName}>
            <label htmlFor="firstName">First Name</label>
            <input ref={firstNameRef} type="text" id="firstName" />
          </div>

          <div className={classes.lastName}>
            <label htmlFor="lastName">Last Name</label>
            <input ref={lastNameRef} type="text" id="lastName" />
          </div>
        </div>

        <label htmlFor="username">Username</label>
        <input ref={usernameRef} type="text" id="username" />

        <label htmlFor="email">Email</label>
        <input ref={emailRef} type="text" id="email" />
        <label htmlFor="password">Password</label>
        <input ref={passwordRef} type="password" id="password" />

        <div className={classes.checkboxWrapper}>
          <div className={classes.agree}>
            <label htmlFor="agree">I agree to the Terms & Conditions</label>
            <input type="checkbox" id="agree" />
          </div>
          <div className={classes.newsletter}>
            <label htmlFor="newsletter">Subscribe to newsletter</label>
            <input type="checkbox" id="newsletter" />
          </div>
        </div>
        <button className={`${classes.register}`}>Create New Account</button>
      </form>
    </div>
  );
};

export default Register;
