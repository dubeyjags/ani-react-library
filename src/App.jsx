import { Outlet } from "react-router-dom";
import { AniList, AniMain, AniNavbar } from "./components/ani-components";
import { useEffect, useState } from "react";
import { AniFormInput } from "./components/ani-components/AniFormInput";
import ListIcon from '@mui/icons-material/List';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CircleIcon from '@mui/icons-material/Circle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TableChartIcon from '@mui/icons-material/TableChart';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
function App() {
    const [dark, setDark] = useState(false);

    // create method updateTheme update the class of the body element
    const updateTheme = (theme) => {
      document.body.className = theme;
    };
    useEffect(() => {
      if (dark) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }, [dark]);
  const leftMenu = [
    { icon: <MenuIcon className="text-white" />, text: "NavBars", link: "/navbars" },
    { icon: <ListIcon className="text-white" />, text: "Lists", link: "/lists" },
    { icon: <AccountCircleIcon className="text-white" />, text: "Avatars", link: "/avatars" },
    { icon: <CreditCardIcon className="text-white" />, text: "Cards", link: "/cards" },
    { icon: <CheckBoxOutlineBlankIcon className="text-white" />, text: "Main", link: "/mains" },
    { icon: <CircleIcon  className="text-white" />, text: "Buttons", link: "/buttons" },
    { icon: <ListAltIcon className="text-white" />, text: "Forms", link: "/forms" },
    { icon: <CalendarMonthIcon className="text-white" />, text: "Date Time Picker", link: "/datetime" },
    { icon: <TableChartIcon className="text-white" />, text: "Tables", link: "/table" },
  ];
  const themeOptions = [
    { label: "Dark", value: "dark" },
    { label: "Light", value: "light" },
    { label: "Cafepay", value: "cafepay" },
    { label: "NRS", value: "nrs" },
    { label: "Rollo", value: "rollo" },
  ];

  return (
    <div
    >
      <div className="flex flex-row">
        <AniNavbar type="vertical" maxwidth={"250px"} height="100vh" placement="left">
          <div className="p-5 font-bold">ANI UI Library</div>
          <AniFormInput size="small" type="select" onChange={(e) => updateTheme(e.target.value)} options={themeOptions} defaultValue={dark ? "dark" : "light"} className="text-white"></AniFormInput>
          <AniList type="vertical" menu={leftMenu} />
        </AniNavbar>
        <main className="p-5 space-y-6" style={{ marginLeft: "250px" }}>
          <header className="p-5 border-b border-gray-300 dark:border-gray-700 mb-5">
            <h1 className="text-4xl font-bold">Ani Library </h1>
            <p className="mt-2">A simple component library built with React and MUI.</p>
            <button
          onClick={() => setDark(!dark)}
        >
          Toggle Theme
        </button>
          </header>
          <AniMain>
          <Outlet />
          </AniMain>
        </main>
      </div>
    </div>
  );
}

export default App;
