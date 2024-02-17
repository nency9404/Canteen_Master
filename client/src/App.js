import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { darkTheme } from "./theme/DarkTheme";

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </ThemeProvider>
  );
}
