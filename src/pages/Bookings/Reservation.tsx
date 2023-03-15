import ReservationForm from "../../components/ReservationForm";
import { ReservationData } from "../../components/types";
import "../../styles/Reservation.scss";

const Reservation: React.FC = () => {
  const availableDates = ["2023-03-18", "2023-03-19", "2023-03-20", "2023-03-21"];
  const availableTimes = ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

  const handleReservationSubmit = (reservationData: ReservationData): void => {
    // handle form submission here, e.g. send reservation data to backend
    console.log(reservationData);
  };
  return (
    <div className="Bookings">
      <section
        style={{
          backgroundImage: `url(${require("./images/hero-bg-mobile@2x.jpg")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <br></br>
        <h1 className="title">farmhouse table</h1>
        <h2 className="whiteSubtitle" style={{ color: "white" }}>
          Reservations
        </h2>
        <p className="whiteBody">
          We can’t wait to host you. If you have any special requirements please feel free to call
          on the phone number below. We’ll be happy to accommodate you.
        </p>
      </section>
      <section className="formSection">
        <div
          style={{
            overflow: "visible",
            width: "80vw",
            height: "auto",
            margin: "5vh 0 0 0",
            boxShadow: "0px 28px 55px -9px rgba(0,0,0,0.75)",
            position: "relative",
            bottom: "15vh",
            backgroundColor: "white",
          }}
        >
          <div>
            <ReservationForm
              availableDates={availableDates}
              availableTimes={availableTimes}
              onSubmit={handleReservationSubmit}
            />
          </div>
        </div>
        <a href="/" rel="noreferrer">
          <button className="blackButton">back to homepage</button>
        </a>
      </section>
    </div>
  );
};

export default Reservation;
