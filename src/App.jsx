import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import routes from "./routes/routes";

function App() {
  return (
    <>
      <Router>
        <Header />
        {routes}
        <Footer />
      </Router>
    </>
  );
}

export default App;
