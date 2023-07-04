import { useState } from "react";
import Todo from "./components/Todo";
import Weather from "./components/Weather";
import NightModeToggle from "./components/NighModeToggle";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light")
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const toggleMode = () => {
    setMode((currentMode) => currentMode === "dark" ? "light" : "dark")
  } 

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NightModeToggle mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
