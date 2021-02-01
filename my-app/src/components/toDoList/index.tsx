import "./index.scss";

import React, { useContext } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import IToDoItem from "../../models/interfaces/todoItem";
import { TodosContext, TodosProviderType } from "../../Providers/todosProvider";
import { Status } from "../../models/enums/status";

interface ToDoListProps {
  todos: IToDoItem[];
  isComplete?: boolean;
  message?: string;
}

const ToDoList = ({ todos, isComplete, message }: ToDoListProps) => {
  const { deleteTodoItem, updateTodoItem }: TodosProviderType = useContext(
    TodosContext
  );

  const onDoneBtnClick = (id: string | undefined, todo: IToDoItem) => {
    if (!id || !todo) return;
    updateTodoItem && updateTodoItem(id, todo);
  };

  const onDelBtnClick = (id: string | undefined) => {
    if (!id) return;
    deleteTodoItem && deleteTodoItem(id);
  };
  const rows =
    todos &&
    todos.length &&
    todos.map(({ _id, title, description }, index) => {
      const id = _id;
      const completeTodoItem: IToDoItem = {
        title,
        description,
        status: Status.DONE,
      };
      const btn = !isComplete && (
        <div className="btnGroup">
          <Button
            variant="success"
            className="btn"
            onClick={() => onDoneBtnClick(id, completeTodoItem)}
          >
            Done
          </Button>
          <Button
            variant="danger"
            className="btn"
            onClick={() => onDelBtnClick(id)}
          >
            Delete
          </Button>
        </div>
      );
      const row = (
        <tr key={id}>
          <td>{index + 1}</td>
          <td>{title}</td>
          <td>{description}</td>
          {btn && <td>{btn}</td>}
        </tr>
      );
      return row;
    });
  const noItems = (
    <tr>
      <td colSpan={isComplete ? 3 : 4}>
        <h3 className="message"> {message || "No items in list"}</h3>
      </td>
    </tr>
  );

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          {!isComplete && <th className="text-center">Actions</th>}
        </tr>
      </thead>

      <tbody>{rows || noItems}</tbody>
    </Table>
  );
};

export default ToDoList;
