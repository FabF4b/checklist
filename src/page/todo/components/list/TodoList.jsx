import TodoHeader from "../header/TodoHeader";
import TodoBody from "../body/TodoBody";
import ToggleModeButton from "../../../../components/button/toggleButton/ToggleButton";
import { useState, useEffect } from "react";

import "./TodoList.scss";

function TodoList() {
  const [todos, setTodos] = useState([]);

  function loadFromLocalStorage() {
    let savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      savedTodos = JSON.parse(savedTodos);
    }
    return savedTodos;
  }

  useEffect(() => {
    const loadedTodos = loadFromLocalStorage();
    setTodos(loadedTodos);
  }, []);

  function handleClickCheckbox(todoItem) {
    const todoItemIndex = todos.findIndex((todo) => todo.id === todoItem.id);
    const updatedTodos = [...todos];
    updatedTodos.splice(todoItemIndex, 1, todoItem);
    setTodos(updatedTodos);
  }

  function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
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

  function toggleTheme() {
    document.body.classList.toggle("lightmode");
  }

  return (
    <div className="todo-list">
      <TodoHeader addTodoItemToList={addTodoItemToList} />
      <TodoBody
        todos={todos}
        handleClickCheckbox={handleClickCheckbox}
        deleteTodoFromList={deleteTodoFromList}
      />
      <ToggleModeButton toggleTheme={toggleTheme} />
    </div>
  );
}

export default TodoList;
