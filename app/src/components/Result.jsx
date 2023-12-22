import React from "react";
import styles from "../styles/result.module.scss";

function Result() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Result</h2>

      <div className={styles.score}>
        <h1>76</h1>
        <p className={styles.hundred}>of 100</p>
      </div>

      <h1 className={styles.subtitle}>Great</h1>
      <p className={styles.body}>
        Your performance exceeds 65% of the people conducting the test here!
      </p>
    </div>
  );
}

export default Result;
