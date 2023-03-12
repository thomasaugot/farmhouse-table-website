import Collapsible from "react-collapsible";
import Footer from "../../components/Footer";
import { BsChevronCompactDown } from "react-icons/bs";
// import { IconContext } from "react-icons";
import "../../styles/Home.scss";

function Home(): JSX.Element {
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
        <h1 className="title">farmhouse table</h1>
        <h2 className="firstSubtitle">Exquisite dining since 1989</h2>
        <p className="whiteBody">
          Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce
          from the comfort of our farmhouse.
        </p>
        <a href="/bookings" rel="noreferrer">
          <button className="transparentButton">Book a table</button>
        </a>
        <div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </section>
      <section
        style={{
          backgroundColor: "white",
        }}
      >
        <img
          src={require("../../pages/Home/images/enjoyable-place-mobile@2x.jpg")}
          className="phoneImg"
          style={{
            overflow: "visible",
            width: "80vw",
            height: "auto",
            margin: "5vh 0 0 0",
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
          className="phoneImg"
          style={{
            width: "80vw",
            height: "auto",
            margin: "5vh 0 8vh 0",
            boxShadow: "0px 28px 55px -9px rgba(0,0,0,0.75)",
          }}
          alt="plate"
        />
        <h2 className="blackSubtitle">The most locally sourced food</h2>
        <p className="blackBody">
          All our ingredients come directly from our farm or local fishery. So you can be sure that
          you’re eating the freshest, most sustainable food.
        </p>
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </section>
      <section style={{ backgroundColor: "black" }}>
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <h2 className="whiteSubtitle">A few highlights from our menu</h2>
        <p className="whiteBody">
          We cater for all dietary requirements, but here’s a glimpse at some of our diner’s
          favourites. Our menu is revamped every season.
        </p>
        <div>
          <img
            src={require("./images/salmon-mobile@2x.jpg")}
            alt="plate"
            className="phoneImg"
            style={{
              width: "80vw",
              height: "auto",
              margin: "5vh 0 8vh 0",
              boxShadow: "0px 28px 55px -9px rgba(0,0,0,0.75)",
            }}
          />
          <h3 className="whiteSubtitle menuItemTitle">Seared Salmon Fillet</h3>
          <p className="whiteBody menuItemDescr">
            Our locally sourced salmon served with a refreshing buckwheat summer salad.
          </p>
        </div>
        <div>
          <img
            src={require("./images/beef-mobile@2x.jpg")}
            alt="plate"
            className="phoneImg"
            style={{
              width: "80vw",
              height: "auto",
              margin: "5vh 0 8vh 0",
              boxShadow: "0px 28px 55px -9px rgba(0,0,0,0.75)",
            }}
          />
          <h3 className="whiteSubtitle menuItemTitle">Rosemary Filet Mignon</h3>
          <p className="whiteBody menuItemDescr">
            Our prime beef served to your taste with a delicious choice of seasonal sides.
          </p>
        </div>
        <div>
          <img
            src={require("./images/chocolate-mobile@2x.jpg")}
            alt="plate"
            className="phoneImg"
            style={{
              width: "80vw",
              height: "auto",
              margin: "5vh 0 8vh 0",
              boxShadow: "0px 28px 55px -9px rgba(0,0,0,0.75)",
            }}
          />
          <h3 className="whiteSubtitle menuItemTitle">Summer Fruit Chocolate Mousse</h3>
          <p className="whiteBody menuItemDescr">
            Creamy mousse combined with summer fruits and dark chocolate shavings.
          </p>
          <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundColor: "white",
        }}
      >
        <div>
          <br></br>
          <br></br>
          <br></br>
        </div>

        <div>
          <div className="collapsItem">
            <Collapsible trigger="Family Gathering" transitionTime={800}>
              <img
                src={require("./images/family-gathering-mobile@2x.jpg")}
                alt="family"
                className="phoneImg"
                style={{
                  width: "80vw",
                  height: "auto",
                  margin: "5vh 0 8vh 0",
                  boxShadow: "0px 28px 55px -9px rgba(0,0,0,0.75)",
                }}
              />
              <p className="blackBody">
                We love catering for entire families. So please bring everyone along for a special
                meal with your loved ones. We’ll provide a memorable experience for all.
              </p>
              <a href="/bookings" rel="noreferrer">
                <button className="blackButton">Book a table</button>
              </a>
            </Collapsible>
          </div>
          <span className="chevron">
            <BsChevronCompactDown />
          </span>

          <div className="collapsItem">
            <Collapsible trigger="Special Events" transitionTime={800}>
              <img
                src={require("./images/special-events-mobile@2x.jpg")}
                alt="family"
                className="phoneImg"
                style={{
                  width: "80vw",
                  height: "auto",
                  margin: "5vh 0 8vh 0",
                  boxShadow: "0px 28px 55px -9px rgba(0,0,0,0.75)",
                }}
              />
              <p className="blackBody">
                Whether it’s a romantic dinner or special date you’re celebrating with others we’ll
                look after you. We’ll be sure to mark your special date with an unforgettable meal.
              </p>
              <a href="/bookings" rel="noreferrer">
                <button className="blackButton">Book a table</button>
              </a>
            </Collapsible>
          </div>
          <span className="chevron">
            <BsChevronCompactDown />
          </span>

          <div className="collapsItem">
            <Collapsible trigger="Social Events" transitionTime={800}>
              <img
                src={require("./images/social-events-mobile@2x.jpg")}
                alt="family"
                className="phoneImg"
                style={{
                  width: "80vw",
                  height: "auto",
                  margin: "5vh 0 8vh 0",
                  boxShadow: "0px 28px 55px -9px rgba(0,0,0,0.75)",
                }}
              />
              <p className="blackBody">
                Are you looking to have a larger social event? No problem! We’re more than happy to
                cater for big parties. We’ll work with you to make your event a hit with everyone.
              </p>
              <a href="/bookings" rel="noreferrer">
                <button className="blackButton">Book a table</button>
              </a>
            </Collapsible>
          </div>
          <span className="chevron">
            <BsChevronCompactDown />
          </span>

          <div>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url(${require("./images/ready-bg-mobile.jpg")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <h2 className="whiteSubtitle">Ready to make a reservation?</h2>
        <a href="/bookings" rel="noreferrer">
          <button className="transparentButton">Book a table</button>
        </a>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
