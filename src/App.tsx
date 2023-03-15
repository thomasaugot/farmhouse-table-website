import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";
import Reservation from "./pages/Bookings/Reservation";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Reservation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
