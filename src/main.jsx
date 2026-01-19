import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbars } from "./components/Navbars.jsx";
import { Lists } from "./components/Lists.jsx";
import { Avatars } from "./components/Avatars.jsx";
import Cards from "./components/Cards.jsx";
import { Mains } from "./components/Mains.jsx";
import { Buttons } from "./components/Buttons.jsx";
import { Forms } from "./components/Forms.jsx";
import { Tables } from "./components/Tables.jsx";
import { DateTime } from "./components/DateTime.jsx";
import { Home } from "./components/Home.jsx";
import { Alerts } from "./components/Alerts.jsx";
import { Tabs } from "./components/Tabs.jsx";
import { Switches } from "./components/Switches.jsx";
import { Tooltips } from "./components/Tooltips.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/navbars" element={<Navbars />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/avatars" element={<Avatars />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/mains" element={<Mains />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/datetime" element={<DateTime />} />
          <Route path="/table" element={<Tables />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/switches" element={<Switches />} />
          <Route path="/tooltips" element={<Tooltips />} />
          <Route path="/popovers" element={<div>popovers Component Coming Soon</div>} />
          <Route path="/modals" element={<div>modals Component Coming Soon</div>} />
          <Route path="/steppers" element={<div>Steppers Component Coming Soon</div>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>        
      </Routes>
      </Router>
  </StrictMode>
);
