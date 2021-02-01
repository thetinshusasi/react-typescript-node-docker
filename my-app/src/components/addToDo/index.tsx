import React, { useState } from "react";
import { useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Status } from "../../models/enums/status";
import IToDoItem from "../../models/interfaces/todoItem";
import { TodosContext, TodosProviderType } from "../../Providers/todosProvider";
import "./index.scss";

export interface IAddToDoProps {}

export default function AddTodo(props: IAddToDoProps) {
  const { createTodoItem }: TodosProviderType = useContext(TodosContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const onChange = (evt: any) => {
    const name = evt.target.name;
    const value = evt.target.value;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
    }
  };

  const onAddBtnClick = () => {
    const todoItem: IToDoItem = {
      title,
      description,
      status: Status.PENDING,
    };
    createTodoItem && createTodoItem(todoItem);
    setTitle("");
    setDescription("");
  };

  return (
    <Row>
      <Col xs={12} sm={3} className="m10px">
        <Form.Control
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={onChange}
        />
      </Col>
      <Col xs={12} sm={6} className="m10px">
        <Form.Control
          type="text"
          placeholder="description"
          name="description"
          value={description}
          onChange={onChange}
        />
      </Col>
      <Col xs={12} sm={3} className="m10px">
        <Button variant="primary" onClick={onAddBtnClick} block>
          Add Task
        </Button>
      </Col>
    </Row>
  );
}
