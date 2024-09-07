import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return <ThemeProvider value={{ theme, toggle }}></ThemeProvider>;
}

export default App;
