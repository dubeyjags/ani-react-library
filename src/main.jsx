import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeWrapper from "./ThemeWrapper.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbars } from "./components/Navbars.jsx";
import { Lists } from "./components/Lists.jsx";
import { Avatars } from "./components/Avatars.jsx";
import Cards from "./components/Cards.jsx";
import { Mains } from "./components/Mains.jsx";
import { Buttons } from "./components/Buttons.jsx";
import { Forms } from "./components/Forms.jsx";
import { DateTime } from "./components/DateTime.jsx";
import { Tables } from "./components/Tables.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeWrapper>
      <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="navbars" element={<Navbars />} />
          <Route path="lists" element={<Lists />} />
          <Route path="avatars" element={<Avatars />} />
          <Route path="cards" element={<Cards />} />
          <Route path="mains" element={<Mains />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="forms" element={<Forms />} />
          <Route path="datetime" element={<DateTime />} />
          <Route path="table" element={<Tables />} />
        </Route>        
      </Routes>
      </Router>
    </ThemeWrapper>
  </StrictMode>
);
