import "./Footer.scss";
import "../styles/Home.scss";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { IconContext } from "react-icons";

function Footer(): JSX.Element {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || "",
  });
  const center = useMemo(() => ({ lat: 52.891298, lng: -0.663154 }), []);

  return (
    <div>
      <br />
      <h1 className="title">farmhouse table</h1>
      <p style={{ textTransform: "uppercase", fontWeight: "200" }} className="whiteBody">
        Marthwaite, Sedbergh
        <br /> Cumbria
        <br /> +00 44 123 4567
        <br />
        <br /> Open Times Mon - Fri: 09:00 AM - 10:00 PM
        <br /> Sat - Sun: 09:00 AM - 11:30 PM
      </p>
      <div className="mapBox">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap mapContainerClassName="map-container" center={center} zoom={10}>
            <Marker position={{ lat: 52.891298, lng: -0.663154 }} />
          </GoogleMap>
        )}
      </div>
      <IconContext.Provider value={{ color: "white", size: "40px", className: "socialLogo" }}>
        <div>
          <a href="https://www.linkedin.com/in/thomas-augot/" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/thomas-augot/" target="_blank" rel="noreferrer">
            <BsInstagram />
          </a>
          <a href="https://www.linkedin.com/in/thomas-augot/" target="_blank" rel="noreferrer">
            <BsWhatsapp />
          </a>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Footer;
