import "../../styles/Home.scss";

function Home() {
  return (
    <div className="Home">
      <section className="Header">
        <img
          className="phoneImg"
          src={require("./images/hero-bg-mobile@2x.jpg")}
          style={{
            objectFit: "fill",
            width: "100%",
            height: "auto",
          }}
          alt="plate"
        />
        <h1 style={{ color: "white", margin: "25px 5vw 0 5vw", lineHeight: "6vh" }}>
          farmhouse table
        </h1>
        <h2 className="firstSubtitle">Exquisite dining since 1989</h2>
        <p className="whiteBody">
          Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce
          from the comfort of our farmhouse.
        </p>
        <a href="/" rel="noreferrer">
          <button className="transparentButton">Book a table</button>
        </a>
      </section>
      <section
        style={{
          backgroundColor: "white",
        }}
      >
        <img
          src={require("../../pages/Home/images/enjoyable-place-mobile@2x.jpg")}
          style={{
            overflow: "visible",
            width: "80vw",
            height: "auto",
            margin: "60px 0 0 0",
            boxShadow: "0px 28px 55px -9px rgba(0,0,0,0.75)",
            position: "relative",
            bottom: "15vh",
          }}
          alt="farm"
        />
        <h2 className="blackSubtitle" style={{ margin: "-7vh 0 3vh 0" }}>
          Enjoyable place for all the family
        </h2>
        <p className="blackBody">
          Our relaxed surroundings make dining with us a great experience for everyone. We can even
          arrange a tour of the farm before your meal.
        </p>
        <img
          src={require("../../pages/Home/images/locally-sourced-mobile@2x.jpg")}
          style={{
            width: "80vw",
            height: "auto",
            margin: "80px 0 ",
            boxShadow: "0px 28px 55px -9px rgba(0,0,0,0.75)",
          }}
          alt="plate"
        />
        <h2 className="blackSubtitle">The most locally sourced food</h2>
        <p className="blackBody">
          All our ingredients come directly from our farm or local fishery. So you can be sure that
          you’re eating the freshest, most sustainable food.
        </p>
      </section>
    </div>
  );
}

export default Home;
