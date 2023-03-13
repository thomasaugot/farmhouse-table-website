import "./BookingForm.scss";
import React, { useState } from "react";

function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [year, setYear] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("00");
  const [amPm, setAmPm] = useState("AM");
  const [persons, setPersons] = useState(4);

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (!name) {
    //   setName(true);
    // } else {
    //   setNameRequired(false);
    // }
    // if (!email) {
    //   setEmailRequired(true);
    // } else {
    //   setEmailRequired(false);
    // }
    // if (!month || !day || !year) {
    //   setDateRequired(true);
    // } else {
    //   setDateRequired(false);
    // }
    // if (!hours || !amPm) {
    //   setTimeRequired(true);
    // } else {
    //   setTimeRequired(false);
    // }
  };

  return (
    <div className="BookingForm">
      <form onSubmit={handleSubmit}>
        <input
          className="booking_name"
          id="booking_name"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name === "" && (
          <p className="name_required" id="name_required">
            This field is required
          </p>
        )}
        <input
          className="booking_email"
          id="booking_email"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {email === "" && (
          <p className="email_required" id="email_required">
            This field is required
          </p>
        )}
        <p className="pick_date_sign" id="pick_date_sign">
          Pick a date
        </p>
        {month === "" ||
          date === "" ||
          (year === "" && (
            <p className="date_required" id="date_required">
              This field is incomplete
            </p>
          ))}
        <input
          className="booking_month"
          id="booking_month"
          type="number"
          name="month"
          placeholder="MM"
          max="12"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
        <input
          className="booking_day"
          id="booking_day"
          type="number"
          name="date"
          placeholder="DD"
          max="31"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          className="booking_year"
          id="booking_year"
          type="number"
          name="year"
          placeholder="YYYY"
          min="2023"
          max="2030"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <p className="pick_time_sign" id="pick_time_sign">
          Pick a time
        </p>
        <p className="time_required invisible" id="time_required">
          This field is incomplete
        </p>
        <input
          className="booking_hours"
          id="booking_hours"
          type="number"
          name="hours"
          placeholder="00"
          min="01"
          max="12"
        />
        <input
          className="booking_minutes"
          id="booking_minutes"
          type="number"
          name="minutes"
          defaultValue="00"
          placeholder="00"
          min="00"
          max="30"
          step="30"
        />
        <div className="am_pm_underline"></div>
        <p className="booking_am_pm" id="booking_am_pm">
          AM
        </p>
        <ul className="am_pm_box invisible" id="am_pm_box">
          <li className="am" id="am">
            <img alt="check icon" src="images/icons/icon-check.svg" />
            <p>AM</p>
          </li>
          <li className="pm" id="pm">
            <img className="invisible" alt="check icon" src="images/icons/icon-check.svg" />
            <p>PM</p>
          </li>
        </ul>
        <div className="persons_underline"></div>
        <p className="booking_persons_number" id="booking_persons_number">
          4 people
        </p>
        <img
          className="increase_persons"
          id="persons_inc"
          alt="+"
          src="images/icons/icon-plus.svg"
        />
        <img
          className="decrease_persons"
          id="persons_dec"
          alt="-"
          src="images/icons/icon-minus.svg"
        />
        <input
          id="reservation_btn"
          className="reservation_btn"
          type="submit"
          name="reservation"
          value="MAKE RESERVATION"
        />
      </form>
    </div>
  );
}

export default BookingForm;
