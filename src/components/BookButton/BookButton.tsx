import "./BookButton.scss";

function BookButton() {
  return (
    <div>
    <a
        href="/"
        rel="noreferrer"
      >
        <button className="BookButton">Book a table</button>
      </a>
    </div>
  );
}

export default BookButton;