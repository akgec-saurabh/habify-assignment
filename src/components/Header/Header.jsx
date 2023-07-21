import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/EFA_Registered Logo.png";
import search from "../../assets/Search@4x.svg";
import menu from "../../assets/Menu_Icon@4x.svg";
import userIcon from "../../assets/User@4x.svg";
import notification from "../../assets/Notification@4x.svg";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
const Header = () => {
  const { isLogin, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onLoginHandler = () => {
    dispatch(authActions.onloginMode());
  };

  const onLogoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <div className={classes.container}>
      <div className={classes.headerWrapper}>
        <img className={classes.logo} src={logo} alt="logo" />
        <div className={classes.search}>
          <img className={classes.icon} src={search} alt="serach" />
          <input type="text" placeholder="Search all forums" />
          <div className={classes.topics}>Topics</div>
        </div>

        <div className={classes.secNav}>
          <div>Latest Topics</div>
          <img className={classes.icon} src={menu} alt="menu" />
          <img className={classes.icon} src={notification} alt="notification" />

          <div className={classes.user}>
            {isLogin && (
              <div onClick={onLogoutHandler} className={classes.userWrapper}>
                <div className={classes.pic}>{user.firstName.charAt(0)}</div>
                <div>{user.username}</div>
              </div>
            )}
            {!isLogin && (
              <div
                onClick={onLoginHandler}
                className={`${classes.userWrapper} ${classes.login}`}
              >
                <div className={classes.pic}>
                  <img className={classes.icon} src={userIcon} alt="" />
                </div>
                Login
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
