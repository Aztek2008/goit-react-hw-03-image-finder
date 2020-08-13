import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ tags, largeImageURL, onClose }) => {
  return (
    <div
      className={styles.Overlay}
      onClick={onClose}
      // onClick={(e) => e.target.nodeName !== "IMG" && onClose}
    >
      <div className={styles.Modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

export default Modal;
