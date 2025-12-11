import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./pages/layout/App";
import FlexBox from "./pages/flexdemo/FlexDemo";
import Grid from "./pages/griddemo/GridDemo";
import GridCheatSheet from "./pages/griddemo/GridCheatSheet";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<div className="welcome">Welcome to the Styling Demo! Select FlexBox or Grid from the menu.</div>} />
        <Route path="flex" element={<FlexBox />} />
        <Route path="grid" element={<Grid />} />
        <Route path="gridcheatsheet" element={<GridCheatSheet />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
