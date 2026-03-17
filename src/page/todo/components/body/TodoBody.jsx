import TodoItem from "../item/TodoItem";
import "./TodoBody.scss";

function TodoBody({ todos, handleClickCheckbox, deleteTodoFromList }) {
  function noTodoItems() {
    if (todos.length === 0) {
      return <p>Done.</p>;
    }
  }

  return (
    <div className="todo-body">
      {todos.map((todo) => (
        <TodoItem
          todoItem={todo}
          handleClickCheckbox={handleClickCheckbox}
          deleteTodoFromList={deleteTodoFromList}
        />
      ))}
      {noTodoItems()}
    </div>
  );
}

export default TodoBody;
