import { useTheme } from "@emotion/react";
import { Buttons } from "./components/Buttons.jsx";
import { Mains } from "./components/Mains.jsx";
import Cards from "./components/Cards.jsx";
import { Avatars } from "./components/Avatars.jsx";
import { Navbars } from "./components/Navbars.jsx";
import { Lists } from "./components/Lists.jsx";

function App() {
  const theme = useTheme(); 
 
  
  return (
    <div style={{background: theme.palette.background.default, color: theme.palette.background.color}} className="min-h-screen">
    <header className="p-5 border-b border-gray-300 dark:border-gray-700 mb-5">
      <h1 className="text-4xl font-bold">Ani Library</h1>
      <p className="mt-2">A simple component library built with React, Tailwind CSS, and MUI.</p>
    </header>
    <main className="p-5 space-y-6">  
      <Navbars />
      <hr />
      <Lists />
      <hr />
      <Avatars />
      <hr />
      <Cards />
      <hr />
        <Mains />
      <hr />
      <Buttons />
  </main>
  </div>
  );
}

export default App;
