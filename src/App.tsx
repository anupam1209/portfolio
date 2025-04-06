import React from "react";
import Hero from "./components/Hero";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;
