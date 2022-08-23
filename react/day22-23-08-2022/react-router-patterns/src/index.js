import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Food from "./Food";
import Meal from "./Meal";
import NotFound from "./NotFound";
import FoodSearch from "./FoodSearch";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/searchFood" element={<FoodSearch />} />
      <Route path="/food/:name" element={<Food />} />
      <Route path="/food/:foodName/drink/:drinkName" element={<Meal />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="*" element={<h1>Error 404: Not Found</h1>} /> */}
    </Routes>
  </BrowserRouter>
);
