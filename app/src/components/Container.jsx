import React from "react";
import Result from "./Result";
import Summary from "./Summary";
import styles from '../styles/container.module.scss'

function Container() {
  return (
    <div className={styles.container}>
        <Result />
        <Summary />
    </div>
  );
}

export default Container;
