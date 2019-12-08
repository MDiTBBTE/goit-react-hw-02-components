import React from 'react';
import styles from './Controls.module.css';

const Controls = props => {
  return (
    <section className={styles.controls}>
      <button
        type="button"
        className={styles.button}
        onClick={props.onClickDecrement}
        disabled={props.pageNum === 1 && true}
      >
        Назад
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={props.onClickIncrement}
        disabled={props.pageNum === 10 && true}
      >
        Вперед
      </button>
    </section>
  );
};

export default Controls;
