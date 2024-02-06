import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import cartoonJungle from "../../assets/mutedJungle.jpg";

export const homeStyles = makeStyles()((theme: Theme) => ({
  homeContainer: {
    width: "100vw",
    height: "100svh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.light,
    "&::after": {
      content: "''",
      backgroundImage: `url(${cartoonJungle})`,
      backgroundSize: "cover",
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0.75,
    },
  },
  rive: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    height: "100%"
  },
}));
