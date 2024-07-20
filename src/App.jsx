
import "./App.css";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import PropertyListings from "./pages/PropertyListings";
import Tenants from "./components/Tenants";
import RUlandLord from "./components/RUlandLord";

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
