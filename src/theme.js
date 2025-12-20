import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: { default: "#f0eeec", color: "#333" },
    primary: { main: "#1c244e", light: "#818cf8", dark: "#333" },
    secondary: { main: "#f7901f", light: "#fb923c", dark: "#ea580c" },
    success: { main: "#22c55e", light: "#4ade80", dark: "#16a34a" },
    danger: { main: "#ef4444", light: "#f87171", dark: "#dc2626" },
    warning: { main: "#eab308", light: "#facc15", dark: "#ca8a04" },
    info: { main: "#0ea5e9", light: "#38bdf8", dark: "#0284c7" },
    light: { main: "#f3f4f6", light: "#f9fafb", dark: "#d1d5db" },
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#000000", color: "#ffffff" },
    primary: { main: "#f70" }
  }
});
