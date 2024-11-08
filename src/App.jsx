import { Outlet } from "react-router-dom";
import Navbar from "./components/navabar/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="h-full">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
