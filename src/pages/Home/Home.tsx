import Header from "../../components/Header/Header";

function Home() {
  return (
    <div>
      <img
        src={require("./images/hero-bg-mobile@2x.jpg")}
        style={{ objectFit: "fill", width: "100%", height: "auto", position: "relative", zIndex: "0"}}
        alt="plate"
      />
      <Header />
    </div>
  );
}

export default Home;
