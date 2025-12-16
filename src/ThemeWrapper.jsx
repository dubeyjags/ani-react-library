import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";

export default function ThemeWrapper({ children }) {
  const [dark, setDark] = useState(false);

  // Update Tailwind's dark class
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        {children}

        <button
          onClick={() => setDark(!dark)}
          className="fixed bottom-5 right-5 bg-indigo-500 text-white px-4 py-2 rounded"
        >
          Toggle Theme
        </button>
    </ThemeProvider>
  );
}
