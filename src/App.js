import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./assets/styles/reset.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
