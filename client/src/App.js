import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { darkTheme } from "./theme/DarkTheme";
import Routers from "./routers/Routers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./components/State/Authentication/Action";
import { store } from "./components/State/Store";

export default function App() {
  const dispatch = useDispatch();
  const email = localStorage.getItem("email");
  const {auth} = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser(auth.email || email));
    // console.log(store.getState());
  },[auth.email]);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}
