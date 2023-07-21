import React from "react";
import classes from "./TopicList.module.css";
import Topic from "../../components/Topic/Topic";
import { useSelector } from "react-redux";
const TopicList = () => {
  const allTopics = useSelector((state) => state.topics.filter);
  return (
    <div className={classes.container}>
      <div className={classes.topicHeader}>
        <div>Topic</div>
        <div>Category</div>
        <div>Users</div>
        <div>Replies</div>
        <div>Views</div>
        <div>Activity</div>
      </div>
      {allTopics.map((topic, i) => (
        <Topic key={topic.topicId} topic={topic} />
      ))}
    </div>
  );
};

export default TopicList;
