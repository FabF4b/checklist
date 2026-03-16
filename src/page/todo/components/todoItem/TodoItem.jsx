import Button from "../../../../components/button/Button";
import Checkbox from "../../../../components/checkbox/Checkbox";
import DeleteButtonIcon from "../../../../components/icon/DeleteIcon";
import "./TodoItem.scss";

function TodoItem({ todoItem, handleClickCheckbox, deleteTodoFromList }) {
  function handleDeleteTodo() {
    deleteTodoFromList(todoItem.id);
  }

  function handleClickCheckboxEvent(event) {
    const updatedTodoItem = { ...todoItem };
    updatedTodoItem.done = event.target.checked;
    handleClickCheckbox(updatedTodoItem);
  }

  return (
    <div className="todo-item">
      <Checkbox
        id={todoItem.id}
        checked={todoItem.done}
        content={todoItem.content}
        handleClickCheckbox={handleClickCheckboxEvent}
      />
      <Button
        icon={<DeleteButtonIcon />}
        text=""
        handleButtonClickEvent={handleDeleteTodo}
      />
    </div>
  );
}

export default TodoItem;
