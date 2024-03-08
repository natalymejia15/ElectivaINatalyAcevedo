import React from "react";
import ReactDOM from "react-dom/client";
import { Gif } from "../src/components/gif";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Gif />
  </React.StrictMode>
);
