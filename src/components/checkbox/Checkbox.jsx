import "./Checkbox.scss";

function Checkbox({ id, checked, content, handleClickCheckbox }) {
  return (
    <div className="checkbox">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleClickCheckbox}
      />
      <label className="label" for={id}>
        {content}
      </label>
    </div>
  );
}

export default Checkbox;
