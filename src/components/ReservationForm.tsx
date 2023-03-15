import React, { useState } from "react";
import { ReservationData } from "../components/types";
import "./ReservationForm.scss";
import "../styles/variables.scss";

import plus from "../pages/Bookings/images/icon-plus.svg";
import minus from "../pages/Bookings/images/icon-minus.svg";

interface ReservationFormProps {
  availableDates: string[]; // array of available dates
  availableTimes: string[]; // array of available times
  onSubmit: (reservationData: ReservationData) => void; // function to handle form submission
}

const ReservationForm: React.FC<ReservationFormProps> = ({
  availableDates,
  availableTimes,
  onSubmit,
}) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fullname || !email || !date || !time) {
      setIsError(true);
      setIsSubmitted(false);
    } else {
      const reservationData = { fullName: fullname, email, date, time, guests };
      onSubmit(reservationData);
      setIsSubmitted(true);
      setIsError(false);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullname(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTime(e.target.value);
  };

  const handleGuestsIncrease = () => {
    setGuests((prevGuests) => prevGuests + 1);
  };

  const handleGuestsDecrease = () => {
    if (guests > 1) {
      setGuests((prevGuests) => prevGuests - 1);
    }
  };

  return (
    <div className="form">
      {isError && <div className="error-message">All fields are required.</div>}
      {isSubmitted && (
        <div className="success-message">
          Your reservation has been submitted! <br /> You should receive a confirmation per email
          within 24 hours
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full name"
          value={fullname}
          onChange={handleNameChange}
          className="inputs"
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="inputs"
        />
        <br />
        <label>
          Pick a date&nbsp;
          <select value={date} onChange={handleDateChange}>
            <option value="">--Select date--</option>
            {availableDates.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Pick a time&nbsp;
          <select value={time} onChange={handleTimeChange}>
            <option value="">--Select time--</option>
            {availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <br />
        <div className="peopleSelect">
          <button type="button" className="symbol" onClick={handleGuestsDecrease}>
            <img src={minus} alt="symbol" />
          </button>
          <span>{guests} people</span>
          <button type="button" className="symbol" onClick={handleGuestsIncrease}>
            <img src={plus} alt="symbol" />
          </button>
        </div>

        <br />
        <button type="submit" className="submitButton">
          Make Reservation
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
