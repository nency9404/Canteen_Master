import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { darkTheme } from "./theme/DarkTheme";
import Routers from "./routers/Routers";

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers/>
    </ThemeProvider>
  );
}
