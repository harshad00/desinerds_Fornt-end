import "./App.css";
import { Header, Footer } from "./components";
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
