import React from 'react';
import TodoItem from './TodoItem';
import { ListGroup } from 'react-bootstrap';

function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
    <ListGroup className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ListGroup>
  );
}

export default TodoList;
