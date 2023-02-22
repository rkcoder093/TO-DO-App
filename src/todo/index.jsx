import React from 'react';
import './todo.css';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';
import useTodo from '../hooks/useTodo';

function TodoApp() {
  const {
    todoState: { hasError, isLoading, todoList, filterType },
    addTodo,
    toggleComplete,
    deleteTodo,
    loadTodo,
    filterBtns,
    intputTextRef,
  } = useTodo();

  return (
    <div className="wrapper">
      <h1 className="heading">Todo App</h1>
      <TodoForm addTodo={addTodo} ref={intputTextRef} />
      {hasError && <p>{hasError.message}</p>}
      {isLoading && <p>Loading...</p>}
      {todoList && (
        <TodoList
          todoList={todoList}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      )}

      <TodoFilter
        filterBtns={filterBtns}
        filterType={filterType}
        loadTodo={loadTodo}
      />
    </div>
  );
}

export default TodoApp;
