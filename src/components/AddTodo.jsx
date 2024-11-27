import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="add-todo-form">
      <Row>
        <Col xs={9}>
          <Form.Control
            type="text"
            placeholder="Add a new task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="add-todo-input"
          />
        </Col>
        <Col xs={3}>
          <Button variant="primary" type="submit" className="add-todo-button w-100">
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AddTodo;
