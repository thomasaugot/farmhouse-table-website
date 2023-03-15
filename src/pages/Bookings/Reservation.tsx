import { Link } from "react-router-dom";
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
      <section className="bookings-header">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h1 className="title">farmhouse table</h1>
        </Link>

        <h2 className="whiteSubtitle" style={{ color: "white" }}>
          Reservations
        </h2>
        <p className="whiteBody">
          We can’t wait to host you. If you have any special requirements please feel free to call
          on the phone number below. We’ll be happy to accommodate you.
        </p>
      </section>
      <section className="formSection">
        <div className="form-container">
          <ReservationForm
            availableDates={availableDates}
            availableTimes={availableTimes}
            onSubmit={handleReservationSubmit}
          />
        </div>
        <Link to={"/"} className="link">
          <h4 style={{ color: "black" }}>Back to homepage</h4>
        </Link>
      </section>
    </div>
  );
};

export default Reservation;
