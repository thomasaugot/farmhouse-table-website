import React, { useState } from "react";
import { ReservationData } from "../components/types";
import "./ReservationForm.scss";

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
  const [guests, setGuests] = useState(1);
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
    <div className="reservation-form__input-group">
      {isError && <div className="error-message">All fields are required.</div>}
      {isSubmitted && <div className="success-message">Your reservation has been submitted!</div>}
      <form onSubmit={handleSubmit}>
        <label className="reservation-form__label">
          Name:
          <input
            type="text"
            value={fullname}
            onChange={handleNameChange}
            className="reservation-form__input"
          />
        </label>
        <label className="reservation-form__label">
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="reservation-form__input"
          />
        </label>
        <label className="reservation-form__label">
          Pick a date:
          <select value={date} onChange={handleDateChange} className="reservation-form__input">
            <option value="">--Select date--</option>
            {availableDates.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>
        <label className="reservation-form__label">
          Pick a time:
          <select value={time} onChange={handleTimeChange} className="reservation-form__input">
            <option value="">--Select time--</option>
            {availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="reservation-form__label">
          Number of guests:
          <button type="button" onClick={handleGuestsDecrease}>
            -
          </button>
          <span className="reservation-form__input">{guests}</span>
          <button type="button" onClick={handleGuestsIncrease}>
            +
          </button>
        </label>
        <button type="submit">Make Reservation</button>
      </form>
    </div>
  );
};

export default ReservationForm;
