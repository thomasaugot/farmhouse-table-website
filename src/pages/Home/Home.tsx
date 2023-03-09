import React from "react";

function Home() {
  return (
    <div>
      <img
        src={require("./images/hero-bg-mobile@2x.jpg")}
        style={{ objectFit: "fill", width: "100%", height: "auto" }}
        alt="plate"
      />
    </div>
  );
}

export default Home;
