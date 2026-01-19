import { Outlet } from "react-router-dom";
import { AniList, AniMain, AniNavbar } from "./components/ani-components";
import { useEffect, useState } from "react";
import { AniFormInput } from "./components/ani-components/AniFormInput";
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
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
    { icon: <MotionPhotosAutoIcon className="text-white" />, text: "NavBars", link: "/navbars" },
    { icon: <MotionPhotosAutoIcon className="text-white" />, text: "Lists", link: "/lists" },
    { icon: <MotionPhotosAutoIcon className="text-white" />, text: "Avatars", link: "/avatars" },
    { icon: <MotionPhotosAutoIcon className="text-white" />, text: "Cards", link: "/cards" },
    { icon: <MotionPhotosAutoIcon className="text-white" />, text: "Main", link: "/mains" },
    { icon: <MotionPhotosAutoIcon className="text-white" />, text: "Buttons", link: "/buttons" },
    { icon: <MotionPhotosAutoIcon className="text-white" />, text: "Forms", link: "/forms" },
    { icon: <MotionPhotosAutoIcon className="text-white" />, text: "Date Time Picker", link: "/datetime" },
    { icon: <MotionPhotosAutoIcon className="text-white" />, text: "Tables", link: "/table" },
    { icon: <MotionPhotosAutoIcon className="text-white" />, text: "Alerts", link: "/alerts"},
    { icon: <MotionPhotosAutoIcon className="text-white" />, text: "Tabs", link: "/tabs"},
    { icon: <MotionPhotosAutoIcon className="text-white" />, text: "Switches", link: "/switches" },
    { icon: <MotionPhotosAutoIcon className="text-white" />, text: "Tooltops", link: "/tooltips" },
    { icon: <MotionPhotosAutoIcon className="text-white" />, text: "Popovers", link: "/popovers" },
    { icon: <MotionPhotosAutoIcon className="text-white" />, text: "Modals/Dialogs", link: "/modals" },
    { icon: <MotionPhotosAutoIcon className="text-white" />, text: "Steppers", link: "/steppers" },
  ];
  const themeOptions = [
    { label: "Dark", value: "dark" },
    { label: "Light", value: "light" },
    { label: "Cafepay", value: "cafepay" },
    { label: "NRS", value: "nrs" },
    { label: "Rollo", value: "rollo" },
  ];

  return (

      <>
        <AniNavbar type="vertical" maxwidth={"250px"} height="100vh" placement="left">
          <div className="font-bold" ml={2}>ANI UI Library</div>
          <AniFormInput size="small" type="select" onChange={(e) => updateTheme(e.target.value)} options={themeOptions} defaultValue={dark ? "dark" : "light"} sx={{color:"#000", background:"#fff" }}></AniFormInput>
          <AniList type="vertical" menu={leftMenu} />
        </AniNavbar>
        <main className="p-5 space-y-6" style={{ marginLeft: "270px" }}>
          <header>
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
      </>
  );
}

export default App;
