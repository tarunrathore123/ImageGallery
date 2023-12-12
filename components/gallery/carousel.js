import React from "react";
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css";


const Carousel = ({items, index}) => {
  return (
      <ImageGallery
        items={items}
        showBullets={false}
        showIndex={false}
        showThumbnails={true}
        lazyLoad={true}
        showPlayButton={false}
        showNav={true}
        showFullscreenButton={false}
        thumbnailPosition={"left"}
        startIndex={index}
      />
  );
};

export default Carousel;
