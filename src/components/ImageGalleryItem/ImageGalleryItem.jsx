import React from "react";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webUrl, tags, onClick, children }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={webUrl}
        alt={tags}
        className={styles.ImageGalleryItemImage}
        onClick={onClick}
      />
      {/* {children} */}
    </li>
  );
};

export default ImageGalleryItem;
