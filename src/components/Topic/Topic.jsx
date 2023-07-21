import React from "react";
import classes from "./Topic.module.css";
import CustomAvatar from "../CustomAvatar/CustomAvatar";

import { getTimeDifference } from "../../helper/time-diff";
const Topic = ({ topic }) => {
  return (
    <div className={classes.container}>
      <div>{topic.topic}</div>
      <div className={classes.category}>{topic.category}</div>
      <div className={classes.users}>
        {topic.users.map((user, i) => (
          <CustomAvatar key={i} name={user.username} />
        ))}
      </div>
      <div>{topic.replies.length}</div>
      <div className={classes.views}>{topic.views / 1000}k</div>
      <div className={classes.activity}>
        {getTimeDifference(topic.last_activity)}
      </div>
    </div>
  );
};

export default Topic;
