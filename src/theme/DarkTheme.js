const { createTheme } = require("@mui/material");

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#e91e63"
        },
        secondary: {
            main: "#5A20CB"
        },
        black: {
            main: "#242B2E"
        },
        background: {
            default: "#0D0D0D", // Added # before the color code
            paper: "#0D0D0D"    // Added # before the color code
        },
        textColor: {
            main: "#FFFFFF" // Example color
        }
    }
})
