import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: { default: "#ffffff", color: "#000000" },
    primary: { main: "#6366f1", light: "#818cf8", dark: "#4f46e5" },
    secondary: { main: "#f97316", light: "#fb923c", dark: "#ea580c" },
    success: { main: "#22c55e", light: "#4ade80", dark: "#16a34a" },
    danger: { main: "#ef4444", light: "#f87171", dark: "#dc2626" },
    warning: { main: "#eab308", light: "#facc15", dark: "#ca8a04" },
    info: { main: "#0ea5e9", light: "#38bdf8", dark: "#0284c7" },
    light: { main: "#f3f4f6", light: "#f9fafb", dark: "#d1d5db" },
    text: { primary: "#ff0000", secondary: "#4b5563" },
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#000000", color: "#ffffff" },
    primary: { main: "#f70" }
  }
});
