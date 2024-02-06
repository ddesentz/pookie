import * as React from "react";
import { galleryStyles } from "./GalleryStyles";
import { Swiper, SwiperClass, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-coverflow";

import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import { Grid, Typography } from "@mui/material";

interface IGallery {}
interface IImage {
  src: string;
  location: string;
  date: number;
}

const images: IImage[] = [
  {
    src: "https://swiperjs.com/demos/images/nature-1.jpg",
    location: "test1",
    date: 1,
  },
  {
    src: "https://swiperjs.com/demos/images/nature-2.jpg",
    location: "test2",
    date: 2,
  },
  {
    src: "https://swiperjs.com/demos/images/nature-3.jpg",
    location: "test3",
    date: 3,
  },
  {
    src: "https://swiperjs.com/demos/images/nature-4.jpg",
    location: "test4",
    date: 4,
  },
  {
    src: "https://swiperjs.com/demos/images/nature-5.jpg",
    location: "test5",
    date: 5,
  },
  {
    src: "https://swiperjs.com/demos/images/nature-6.jpg",
    location: "test6",
    date: 6,
  },
  {
    src: "https://swiperjs.com/demos/images/nature-7.jpg",
    location: "test7",
    date: 7,
  },
  {
    src: "https://swiperjs.com/demos/images/nature-8.jpg",
    location: "test8",
    date: 8,
  },
  {
    src: "https://swiperjs.com/demos/images/nature-9.jpg",
    location: "test9",
    date: 9,
  },
];

const GalleryComponent: React.FunctionComponent<IGallery> = () => {
  const { classes } = galleryStyles();
  const [location, setLocation] = React.useState<string>("");
  const [date, setDate] = React.useState<number>(0);

  const { RiveComponent } = useRive({
    src: "/assets/alltime.riv",
    stateMachines: "Idle",
    artboard: "AllTime",
    autoplay: true,
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.Center,
    }),
  });

  const imageRender = (img: IImage, isActive: boolean) => {
    if (isActive) {
      setLocation(img.location);
      setDate(img.date);
    }
    return <img src={img.src} />;
  };

  return (
    <div className={classes.galleryContainer}>
      <div className={classes.headerContainer}>
        <RiveComponent className={classes.rive} />
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 10,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={true}
        mousewheel={true}
        modules={[EffectCoverflow, Pagination, Mousewheel]}
        className={classes.swiperContainer}
      >
        {images.map((image) => (
          <SwiperSlide key={image.src}>
            {({ isActive }) => imageRender(image, isActive)}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={classes.footerContainer}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography>{location}</Typography>
          <Typography>{new Date(date).toLocaleDateString()}</Typography>
        </Grid>
      </div>
    </div>
  );
};

export const Gallery = GalleryComponent;
