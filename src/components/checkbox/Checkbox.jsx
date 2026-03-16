import "./Checkbox.scss";

function Checkbox({ id, checked, content, handleClickCheckbox, className }) {
  return (
    <div class="checkbox">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleClickCheckbox}
      />
      <label class="label" for={id}>
        {content}
      </label>
    </div>
  );
}

export default Checkbox;
