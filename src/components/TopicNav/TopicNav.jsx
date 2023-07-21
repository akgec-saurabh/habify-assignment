import React, { useEffect } from "react";
import classes from "./TopicNav.module.css";

import { useDispatch, useSelector } from "react-redux";
import { navActions } from "../../store/nav-slice";
import { topicActions } from "../../store/topic-slice";

const TopicNav = () => {
  const { all, latest, rising, liked } = useSelector((state) => state.nav);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rising) {
      dispatch(topicActions.filterTopicByRising());
    } else if (latest) {
      dispatch(topicActions.filterTopicByLatest());
    } else {
      dispatch(topicActions.clearFilter());
    }
  }, [rising]);
  return (
    <div className={classes.container}>
      <select
        onChange={(e) => {
          dispatch(navActions.setCategory(e.target.value));
          dispatch(topicActions.filterTopicByCategory(e.target.value));
        }}
        className={`${classes.nav} ${classes.all}`}
        name="all"
        id="all"
      >
        <option default value="all">
          All Categories
        </option>
        {all.allCategory.map((user, i) => (
          <option key={i} value={user}>
            {user}
          </option>
        ))}
      </select>
      <div
        className={`${classes.nav} ${classes.latest} ${
          latest ? `${classes.active}` : ""
        }`}
        onClick={() => {
          dispatch(navActions.filterLatest());
        }}
      >
        Latest
      </div>
      <div
        className={`${classes.nav} ${classes.rising}  ${
          rising ? `${classes.active}` : ""
        }`}
        onClick={() => {
          dispatch(navActions.filterRising());
        }}
      >
        Rising
      </div>
      <div
        className={`${classes.nav} ${classes.liked}  ${
          liked ? `${classes.active}` : ""
        }`}
        onClick={() => {
          dispatch(navActions.filterLiked());
        }}
      >
        Most Liked
      </div>
    </div>
  );
};

export default TopicNav;
