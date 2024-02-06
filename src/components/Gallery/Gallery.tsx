import * as React from "react";
import { galleryStyles } from "./GalleryStyles";

interface IGallery {}

const GalleryComponent: React.FunctionComponent<IGallery> = () => {
  const { classes } = galleryStyles();
  
  return (
    <div className={classes.galleryContainer}></div>
  );
};

export const Gallery = GalleryComponent;