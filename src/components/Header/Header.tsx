import BookButton from "../BookButton/BookButton";
import "../../styles/index.scss";
import "./Header.scss";

function Header() {
  return (
    <div className="Header" style={{position: "absolute"}}>
      <h1 style={{color: "white", margin: "25px 0 0 0"}}>dine</h1>
      <h2 className="whiteSubtitle">Exquisite dining since 1989</h2>
      <p className="whiteBody">Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>

      <BookButton />

      <img src={require("../../pages/Home/images/enjoyable-place-mobile@2x.jpg")} style={{overflow: "visible", width:"80vw", height: "auto", margin: "60px 0", boxShadow: "0px 28px 55px -9px rgba(0,0,0,0.75)"}} alt="farm" />

      <h2 className="blackSubtitle">Enjoyable place for all the family</h2>
      <p className="blackBody">Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange 
  a tour of the farm before your meal.</p>
  <img src={require("../../pages/Home/images/locally-sourced-mobile@2x.jpg")} style={{overflow: "visible", width:"80vw", height: "auto", margin: "60px 0", boxShadow: "0px 28px 55px -9px rgba(0,0,0,0.75)"}} alt="plate" />
  <h2 className="blackSubtitle">The most locally sourced food</h2>
      <p className="blackBody"> All our ingredients come directly from our farm or local fishery. So you can be sure that you’re 
  eating the freshest, most sustainable food.</p>
    </div>
  );
}

export default Header;
