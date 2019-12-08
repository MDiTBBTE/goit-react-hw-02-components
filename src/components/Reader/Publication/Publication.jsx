import React from "react";
import styles from "./Publication.module.css";

const Publication = props => {
  return (
    <article className={styles.publication}>
      {props.items
        .filter((elem, ind) => ind === props.pageNum)
        .map(elem => (
          <article key={elem.id}>
            <h2>{elem.title}</h2>
            <p>{elem.text.length > 950 && elem.text.slice(0, 950) + "..."}</p>
          </article>
        ))}
    </article>
  );
};

export default Publication;
