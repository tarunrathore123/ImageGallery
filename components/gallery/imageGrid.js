import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

const ImageGrid = ({filteredData, setIsImageOpen, setCurrentImageIndex}) => {
  return (
    <>
      {filteredData.map((image, index) => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCurrentImageIndex(index);
              setIsImageOpen(true);
            }}
            key={image.name}
          >
            <Image
              src={image.original}
              width={300}
              height={200}
              layout="responsive"
              alt="Picture of the author"
              style={{ objectFit: "contain", width: "100%" }}
            />
          </Grid>
        );
      })}
    </>
  );
};

export default ImageGrid;
