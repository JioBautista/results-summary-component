import React from "react";
import data from "../data/data.json";
import styles from "../styles/summary.module.scss";

function Summary() {
  const colors = [
    "hsl(0, 100%, 67%)",
    "hsl(39, 100%, 56%)",
    "hsl(166, 100%, 37%)",
    "hsl(234, 85%, 45%)",
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Summary</h2>
      {data.map((items) => (
        <>
          <div
            className={styles.info}
            style={{ backgroundColor: `${items.color}` }}
          >
            <div>
              <img src={items.icon} />
              <p style={{color:`${items.textcolor}`}}>{items.category}</p>
            </div>

            <div>
              <p className={styles.scoreNum}>{items.score}</p>
              <span>/ 100</span>
            </div>
          </div>
        </>
      ))}
      <button>Continue</button>
    </div>
  );
}

export default Summary;
