import React from "react";
import HeaderPage from "./components/header";
import HomePage from "./pages/home";
import FooterPage from "./components/footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderPage />
        <HomePage />
        <FooterPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
