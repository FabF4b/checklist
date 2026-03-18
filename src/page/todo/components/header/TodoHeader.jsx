import Input from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import AddIcon from "../../../../components/icon/AddIcon";
import Title from "../title/TodoTitle";
import { useState } from "react";
import "./TodoHeader.scss";

function TodoHeader({ addTodoItemToList, saveToLocalStorage }) {
  const [inputValue, setInputValue] = useState("");

  function handleInputEvent(event) {
    setInputValue(event.target.value);
  }
  function handleAddTodoEvent() {
    if (inputValue.trim() === "") return;
    addTodoItemToList({ id: Math.random(), content: inputValue, done: false });
    setInputValue("");
  }

  return (
    <div className="headerbar">
      <div className="headerbar__title">
        <Title text="DONE." />
      </div>
      <div className="headerbar__inputs">
        <Input inputValue={inputValue} handleInputEvent={handleInputEvent} />
        <Button
          icon={<AddIcon />}
          text=""
          saveToLocalStorage={saveToLocalStorage}
          handleButtonClickEvent={handleAddTodoEvent}
        />
      </div>
    </div>
  );
}

export default TodoHeader;
