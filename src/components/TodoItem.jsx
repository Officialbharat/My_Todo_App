import React, { useState } from 'react';
import { ListGroupItem, Button, Form } from 'react-bootstrap';

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newTitle.trim()) {
      editTodo(todo.id, newTitle.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewTitle(todo.title);
  };

  return (
    <ListGroupItem className="todo-item d-flex align-items-center">
      {isEditing ? (
        <>
          <Form.Control
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="edit-input flex-grow-1"
          />
          <Button variant="success" size="sm" onClick={handleSave}>
            Save
          </Button>
          <Button variant="secondary" size="sm" onClick={handleCancel} className="ms-2">
            Cancel
          </Button>
        </>
      ) : (
        <>
          <div
            className={`todo-title flex-grow-1 ${todo.completed ? 'completed' : ''}`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.title}
          </div>
          <Button variant="warning" size="sm" onClick={handleEdit} className="me-2">
            Edit
          </Button>
          <Button variant="danger" size="sm" onClick={() => deleteTodo(todo.id)}>
            Delete
          </Button>
        </>
      )}
    </ListGroupItem>
  );
}

export default TodoItem;
