import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import jungleWithSloth from "../../assets/jungleWithSloth.jpg";
import abstractLeaves from "../../assets/abstractLeaves.jpg";

export const galleryStyles = makeStyles()((theme: Theme) => ({
  galleryContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.default,
    overflow: "hidden",
    "&::after": {
      content: "''",
      backgroundImage: `url(${jungleWithSloth})`,
      backgroundSize: "cover",
      backgroundPosition: "right",
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0.25,
    },
  },
  headerContainer: {
    width: "200%",
    height: "25%",
    backgroundColor: theme.palette.background.default,
    position: "relative",
    zIndex: 10,
    borderBottomLeftRadius: "50%",
    borderBottomRightRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&::after": {
      content: "''",
      backgroundImage: `url(${abstractLeaves})`,
      position: "absolute",
      borderBottomLeftRadius: "50%",
      borderBottomRightRadius: "50%",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0.05,
    },
  },
  rive: {
    position: "relative",
    zIndex: 1,
    width: `50%`,
    height: "100%",
    padding: `${theme.spacing(3)} 0`,
  },
  footerContainer: {
    width: "200%",
    height: "25%",
    backgroundColor: theme.palette.background.default + "EE",
    position: "relative",
    zIndex: 10,
    borderTopLeftRadius: "50%",
    borderTopRightRadius: "50%",
    "&::after": {
      content: "''",
      backgroundImage: `url(${abstractLeaves})`,
      position: "absolute",
      borderBottomLeftRadius: "50%",
      borderBottomRightRadius: "50%",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0.05,
      backgroundPosition: "center",
    },
  },
  swiperContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${theme.spacing(3)} 0`,
    overflow: "visible",
    "& > .swiper-wrapper": {
      "& > .swiper-slide": {
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "80%",
        display: "flex",
        justifyContent: "center",
        filter: `drop-shadow(${theme.spacing(3)} ${theme.spacing(10)} ${theme.spacing(8)} ${theme.palette.secondary.contrastText})`,
        "& > img": {
          display: "block",
          width: "100%",
        },
      },
    },
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
  },
}));
