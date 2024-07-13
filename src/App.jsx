import React from "react";
import "./App.css";
import { Header, Footer, Logo } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
