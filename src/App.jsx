import { useTheme } from "@emotion/react";
import { Buttons } from "./components/Buttons.jsx";
import { Mains } from "./components/Mains.jsx";
import Cards from "./components/Cards.jsx";
import { Avatars } from "./components/Avatars.jsx";
import { Navbars } from "./components/Navbars.jsx";
import { Lists } from "./components/Lists.jsx";
import { AniList } from "./components/AniList.jsx";
import { AniNavbar } from "./components/AniNavbar.jsx";
import { Forms } from "./components/Forms.jsx";
import { DateTime } from "./components/DateTime.jsx";
import { Tables } from "./components/Tables.jsx";
import { Outlet } from "react-router-dom";


function App() {
  const theme = useTheme();

  const leftMenu = [
    { text: "NavBars", link: "/navbars" },
    { text: "Lists", link: "/lists" },
    { text: "Avatars", link: "/avatars" },
    { text: "Cards", link: "cards" },
    { text: "Main", link: "mains" },
    { text: "Buttons", link: "buttons" },
    { text: "Forms", link: "forms" },
    { text: "Date Time Picker", link: "datetime" },
    { text: "Tables", link: "table" },
  ];

  return (
    <div
      style={{
        background: theme.palette.background.default,
        color: theme.palette.background.color,
      }}
      className="min-h-screen"
    >
      <div className="flex flex-row">
        <AniNavbar type="vertical" maxwidth={"250px"} height="100vh" placement="left" shadow="xl">
          <div className="p-5 font-bold">ANI UI Library</div>
          <AniList type="vertical" menu={leftMenu} />
        </AniNavbar>
        <main className="p-5 space-y-6" style={{ marginLeft: "250px" }}>
          <header className="p-5 border-b border-gray-300 dark:border-gray-700 mb-5">
            <h1 className="text-4xl font-bold">Ani Library</h1>
            <p className="mt-2">A simple component library built with React, Tailwind CSS, and MUI.</p>
          </header>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
