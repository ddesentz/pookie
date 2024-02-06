import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Gallery } from "./components/Gallery/Gallery";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
    </>
  )
);
