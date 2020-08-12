import React from "react";
import styles from "./Button.module.css";

const Button = ({ thisClicked }) => {
  return (
    <div className={styles.ButtonContainer}>
      <button onClick={thisClicked} className={styles.Button} type="button">
        Load more
      </button>
    </div>
  );
};

export default Button;
