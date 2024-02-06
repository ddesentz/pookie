import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-coverflow";

import * as React from "react";
import { galleryStyles } from "./GalleryStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Mousewheel,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import { Grid, Typography } from "@mui/material";
import Icon from "@mdi/react";
import { mdiCalendar, mdiImage, mdiMapMarker } from "@mdi/js";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../..";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

interface IGallery {}
interface IImage {
  src: string;
  location: string;
  date: string;
  description: string;
}

const GalleryComponent: React.FunctionComponent<IGallery> = () => {
  const { classes } = galleryStyles();
  const storage = getStorage();
  const [location, setLocation] = React.useState<string>("");
  const [date, setDate] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [images, setImages] = React.useState<IImage[]>([]);

  React.useEffect(() => {
    fetchImages().then();
  }, []);

  const fetchImages = async () => {
    await getDocs(collection(db, "images")).then((snapshot) => {
      snapshot.docs.forEach(async (doc, index) => {
        const data = doc.data();
        const imageRef = ref(storage, `images/${data.src}`);
        const downloadURL = await getDownloadURL(imageRef)
        setImages((prev) => [
          ...prev,
          {
            src: downloadURL,
            location: data.location,
            date: data.date,
            description: data.description,
          },
        ]);
      });
    });
  };

  const updateState = (img: IImage) => {
    Promise.resolve().then(() => {
      setLocation(img.location);
      setDate(img.date);
      setDescription(img.description);
    });
  };

  const imageRender = (img: IImage, isActive: boolean, idx: number) => {
    if (isActive) {
      updateState(img);
    }
    return <img src={img.src} className={classes.image} />;
  };

  const { RiveComponent } = useRive({
    src: "/assets/alltime.riv",
    stateMachines: "Idle",
    artboard: "AllTime",
    autoplay: true,
    layout: new Layout({
      fit: Fit.FitHeight,
      alignment: Alignment.Center,
    }),
  });

  return (
    <div className={classes.galleryContainer}>
      <div className={classes.headerContainer}>
        <RiveComponent className={classes.rive} />
      </div>
      {images.length > 3 && (
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
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={images.length > 3}
          mousewheel={true}
          modules={[EffectCoverflow, Mousewheel, Autoplay, Pagination]}
          className={classes.swiperContainer}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              {({ isActive }) => imageRender(image, isActive, index)}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className={classes.footerContainer}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            item
            alignItems="center"
            justifyContent="center"
            className={classes.detailRow}
          >
            <Icon path={mdiMapMarker} className={classes.icon} />
            <Typography className={classes.detailText}>{location}</Typography>
          </Grid>
          <Grid
            item
            alignItems="center"
            justifyContent="center"
            className={classes.detailRow}
          >
            <Icon path={mdiCalendar} className={classes.icon} />
            <Typography className={classes.detailText}>{date}</Typography>
          </Grid>
          <Grid
            item
            alignItems="center"
            justifyContent="center"
            className={classes.detailRow}
          >
            <Icon path={mdiImage} className={classes.icon} />
            <Typography className={classes.detailText}>
              {description}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export const Gallery = GalleryComponent;
