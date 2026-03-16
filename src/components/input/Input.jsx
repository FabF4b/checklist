import "./Input.scss";

function Input({ handleInputEvent, inputValue }) {
  return (
    <input
      type="text"
      class="input"
      onChange={handleInputEvent}
      value={inputValue}
    ></input>
  );
}

export default Input;
