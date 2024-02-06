import * as React from "react";
import { homeStyles } from "./HomeStyles";
import {
  EventType,
  StateMachineInput,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { useNavigate } from "react-router-dom";

interface IHome {}

const HomeComponent: React.FunctionComponent<IHome> = () => {
  const { classes } = homeStyles();
  const navigate = useNavigate();
  const MAIN_STATE = "MainState";
  const [noCount, setNoCount] = React.useState<number>(0);

  const { rive, RiveComponent } = useRive({
    src: "/assets/vday.riv",
    stateMachines: MAIN_STATE,
    artboard: "slothBoard",
    autoplay: true,
  });

  const numNoInput: StateMachineInput | null = useStateMachineInput(
    rive,
    MAIN_STATE,
    "numNo",
    0
  );

  React.useEffect(() => {
    if (rive) {
      rive.on(EventType.StateChange, (event: any) => {
        if (event.data[0] === "NoClick") {
          setNoCount((prev) => {
            if (numNoInput) {
              numNoInput.value = prev + 1;
            }
            return prev + 1;
          });
        }
        if(event.data[0] === "ExtraClick"){
          navigate("/gallery")
        }
      });
    }
  }, [numNoInput]);

  return (
    <div className={classes.homeContainer}>
      <RiveComponent className={classes.rive} />
    </div>
  );
};

export const Home = HomeComponent;
