import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { darkTheme } from "./theme/DarkTheme";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HomePage/>
    </ThemeProvider>
  );
}
