import React from "react";
import data from "../data/data.json";
import styles from '../styles/summary.module.scss'

function Summary() {
  return (
    <div className={styles.container}>
      <h2>Summary</h2>
      {data.map((items) => (
        <>
          <div className={styles.info}>
            <div>
              <img src={items.icon} />
              <p>{items.category}</p>
            </div>

            <div>
              <p>{items.score}/100</p>
            </div>
          </div>
        </>
      ))}
      <button>Continue</button>
    </div>
  );
}

export default Summary;
