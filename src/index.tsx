import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material";
import { pookieTheme } from "./Theme";
import { RouterProvider } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAc-gvgB38jFsx4X09cQ5G1O1m4fAOzBMQ",
  authDomain: "pookie-vday.firebaseapp.com",
  projectId: "pookie-vday",
  storageBucket: "pookie-vday.appspot.com",
  messagingSenderId: "111925015762",
  appId: "1:111925015762:web:a96660ed0bce39c855e90b"
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

root.render(
  <ThemeProvider theme={pookieTheme}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

