import React from "react";
import classes from "./Homepage.module.css";

import TopicList from "../../components/TopicList/TopicList";
import TopicNav from "../../components/TopicNav/TopicNav";
import Header from "../../components/Header/Header";

const Homepage = () => {
  return (
    <div className={classes.container}>
      <Header />
      <TopicNav />
      <TopicList />
    </div>
  );
};

export default Homepage;
