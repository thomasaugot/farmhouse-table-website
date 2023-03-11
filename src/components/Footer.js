import "./Footer.scss";
import "../styles/Home.scss";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

function Footer() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat: 52.891298, lng: -0.663154 }), []);

  return (
    <div>
      <br></br>
      <h1 className="title">farmhouse table</h1>
      <p style={{ textTransform: "uppercase", fontWeight: "200" }} className="whiteBody">
        Marthwaite, Sedbergh<br></br> Cumbria<br></br> +00 44 123 4567<br></br>
        <br></br> Open Times Mon - Fri: 09:00 AM - 10:00 PM<br></br> Sat - Sun: 09:00 AM - 11:30 PM
      </p>
      <div className="mapBox">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap mapContainerClassName="map-container" center={center} zoom={10}>
            <MarkerF position={{ lat: 52.891298, lng: -0.663154 }} />
          </GoogleMap>
        )}
      </div>
    </div>
  );
}

export default Footer;
