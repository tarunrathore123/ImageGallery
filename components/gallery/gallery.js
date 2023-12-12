"use client";
import { Grid } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import Carousel from "./carousel";
import ImageGrid from "./imageGrid";

const data = [
  {
    original: "/gallery/image1.jpg",
    thumbnail: "/gallery/image1.jpg",
    category: "Branding",
  },
  {
    original: "/gallery/image2.jpg",
    thumbnail: "/gallery/image2.jpg",
    category: "Branding",
  },
  {
    original: "/gallery/image3.jpg",
    thumbnail: "/gallery/image3.jpg",
    category: "Branding",
  },
  {
    original: "/gallery/image4.jpg",
    thumbnail: "/gallery/image4.jpg",
    category: "Branding",
  },
  {
    original: "/gallery/image5.jpg",
    thumbnail: "/gallery/image5.jpg",
    category: "Design",
  },
  {
    original: "/gallery/image6.jpg",
    thumbnail: "/gallery/image6.jpg",
    category: "Design",
  },
  {
    original: "/gallery/image7.jpeg",
    thumbnail: "/gallery/image7.jpeg",
    category: "Design",
  },
  {
    original: "/gallery/image8.jpg",
    thumbnail: "/gallery/image8.jpg",
    category: "Design",
  },
  {
    original: "/gallery/image9.jpg",
    thumbnail: "/gallery/image9.jpg",
    category: "Design",
  },
  {
    original: "/gallery/image10.jpg",
    thumbnail: "/gallery/image10.jpg",
    category: "Development",
  },
  {
    original: "/gallery/image11.jpeg",
    thumbnail: "/gallery/image11.jpeg",
    category: "Development",
  },
  {
    original: "/gallery/image12.jpeg",
    thumbnail: "/gallery/image12.jpeg",
    category: "Development",
  },
  {
    original: "/gallery/image13.jpg",
    thumbnail: "/gallery/image13.jpg",
    category: "Development",
  },
  {
    original: "/gallery/image14.jpg",
    thumbnail: "/gallery/image14.jpg",
    category: "Development",
  },
  {
    original: "/gallery/image15.jpg",
    thumbnail: "/gallery/image15.jpg",
    category: "Development",
  },
  {
    original: "/gallery/image16.jpg",
    thumbnail: "/gallery/image16.jpg",
    category: "Development",
  },
];

const Gallery = ({ category, isImageOpen, setIsImageOpen }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filteredData, setFileteredData] = useState([]);

  useEffect(() => {
    if (category == "All") {
      setFileteredData(data);
    } else {
      setFileteredData(data.filter((item) => item.category == category));
    }
  }, [category]);
  return (
    <Grid container spacing={1} style={{ width: "100%" }}>
      {isImageOpen ? (
        <Carousel items={filteredData} index={currentImageIndex} />
      ) : (
        <ImageGrid
          filteredData={filteredData}
          setCurrentImageIndex={setCurrentImageIndex}
          setIsImageOpen={setIsImageOpen}
        />
      )}
    </Grid>
  );
};

export default Gallery;
