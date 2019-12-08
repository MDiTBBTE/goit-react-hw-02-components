import React from "react";
import styles from "./Counter.module.css";

const Counter = props => {
  return <p className={styles.counter}>{props.pageNum}/10</p>;
};

export default Counter;
