import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";
import Bookings from "./pages/Bookings/Bookings";
import { Routes, Route } from "react-router-dom";

function App(): JSX.Element {
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
