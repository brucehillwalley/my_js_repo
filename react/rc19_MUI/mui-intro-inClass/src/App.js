import Home from "./pages/Home"
import { createTheme, ThemeProvider } from "@mui/material"
import { deepOrange, teal, deepPurple } from "@mui/material/colors"

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#dc143c",
      },
      secondary: {
        main: teal[700],
      },
      morcivert: {
        main: deepPurple["A200"],
        light: deepPurple["A100"],
        dark: deepPurple["A400"],
      },
    },
    // breakpoints: {
    //   values: {
    //     sm: "650",
    //   },
    // },
  })

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
