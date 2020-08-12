import React from "react";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webUrl, tags }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img src={webUrl} alt={tags} className={styles.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
