import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";
import Bookings from "./pages/Bookings/Bookings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </div>
  );
}

export default App;
