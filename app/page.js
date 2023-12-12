'use client'
import styles from "./page.module.css";
import { Button, Grid, Typography } from "@mui/material";
import SectionHeading from "@/components/common/sectionHeading";
import clsx from "clsx";
import Gallery from "@/components/gallery/gallery";
import { useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState([
    { name: "All", active: true },
    { name: "Branding", active: false },
    { name: "Design", active: false },
    { name: "Development", active: false },
  ]);
  const [isImageOpen, setIsImageOpen] = useState(false);

  const [category, setCategory] = useState("All");
  const handleCategoryClick = (index) => {
    const updatedCategories = categories.map((category, i) => {
      return {
        ...category,
        active: i === index ? true : false,
      };
    });

    setCategories(updatedCategories);
  };

  return (
    <main className={styles.main}>
      <div>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SectionHeading text="Photo Gallery" />
            <Typography variant="caption">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {categories.map((item, index) => (
              <Button
                variant="outlined"
                color="success"
                className={clsx(item.active && styles.activeButton)}
                onClick={() => {
                  setCategory(item.name);
                  handleCategoryClick(index);
                  setIsImageOpen(false)
                }}
                key={index}
              >
                {item.name}
              </Button>
            ))}
          </Grid>

          <Grid item xs={12}>
            <Gallery category={category} isImageOpen={isImageOpen} setIsImageOpen={setIsImageOpen} />
          </Grid>
        </Grid>
      </div>
    </main>
  );
}
