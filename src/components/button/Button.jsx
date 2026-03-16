import "./Button.scss";

function Button({ icon, handleButtonClickEvent, text }) {
  return (
    <button className="button" onClick={handleButtonClickEvent}>
      {icon}
      {text}
    </button>
  );
}

export default Button;
