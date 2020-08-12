import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem key={id} tags={tags} webUrl={webformatURL} />
      ))}
    </ul>
  );
};

export default ImageGallery;
