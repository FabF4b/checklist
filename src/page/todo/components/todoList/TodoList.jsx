import TodoHeader from "../todoHeader/TodoHeader";
import TodoBody from "../todoBody/TodoBody";
import { useState } from "react";
import "./TodoList.scss";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: Math.random(), content: "8 std. Hamsterrad", done: false },
  ]);

  function handleClickCheckbox(todoItem) {
    const todoItemIndex = todos.findIndex((todo) => todo.id === todoItem.id);
    const updatedTodos = [...todos];
    updatedTodos.splice(todoItemIndex, 1, todoItem);
    setTodos(updatedTodos);
  }

  function addTodoItemToList(todoItem) {
    const updatedTodos = [...todos];
    updatedTodos.push(todoItem);
    setTodos(updatedTodos);
  }

  function deleteTodoFromList(todoId) {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
  }

  return (
    <div className="todo-list">
      <TodoHeader addTodoItemToList={addTodoItemToList} />
      <TodoBody
        todos={todos}
        handleClickCheckbox={handleClickCheckbox}
        deleteTodoFromList={deleteTodoFromList}
      />
    </div>
  );
}

export default TodoList;
