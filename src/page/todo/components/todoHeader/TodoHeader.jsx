import Input from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import AddButtonIcon from "../../../../components/icon/AddIcon";
import { useState } from "react";
import "./TodoHeader.scss";

function TodoHeader({ addTodoItemToList }) {
  const [inputValue, setInputValue] = useState("");

  function handleInputEvent(event) {
    setInputValue(event.target.value);
  }
  function handleAddTodoEvent() {
    if (!inputValue) return;
    addTodoItemToList({ id: Math.random(), content: inputValue, done: false });
    setInputValue("");
  }

  return (
    <div className="headerbar">
      <Input inputValue={inputValue} handleInputEvent={handleInputEvent} />
      <Button
        icon={<AddButtonIcon />}
        text=""
        handleButtonClickEvent={handleAddTodoEvent}
      />
    </div>
  );
}

export default TodoHeader;
