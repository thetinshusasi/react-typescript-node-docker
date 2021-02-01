import React, { useEffect, useState, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddTodo from "../components/addToDo";
import AwaitLoading from "../components/awaitLoading";
import ToDoList from "../components/toDoList";

import Todos from "../containers/toDos";
import { getDoneTasks, getPendingTasks } from "../helpers/utils";
import { Status } from "../models/enums/status";
import IToDoItem from "../models/interfaces/todoItem";
import { TodosContext, TodosProviderType } from "../Providers/todosProvider";
const todolist: IToDoItem[] = [
  {
    _id: "1",
    title: "100",
    description: "desc1",
    status: Status.PENDING,
  },
];
export interface IHomeProps {}
export default function Home(props: IHomeProps) {
  const { loading, error, todos, getTodoList }: TodosProviderType = useContext(
    TodosContext
  );
  const [pendingTasks, setPendingTasks] = useState(getPendingTasks(todos));
  const [doneTasks, setDoneTasks] = useState(getDoneTasks(todos));

  useEffect(() => {
    getTodoList && getTodoList();
  }, [getTodoList]);
  useEffect(() => {
    setPendingTasks(getPendingTasks(todos));
    setDoneTasks(getDoneTasks(todos));
  }, [todos]);

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <AddTodo />
          </Col>
          <Col xs={12}>
            <Todos title="To Do Tasks">
              <AwaitLoading loading={loading} error={error}>
                <ToDoList
                  todos={pendingTasks}
                  message="Please add items in list by creating a task"
                />
              </AwaitLoading>
            </Todos>
          </Col>
          <Col xs={12}>
            <Todos title="Done Tasks">
              <AwaitLoading loading={loading} error={error}>
                <ToDoList
                  todos={doneTasks}
                  isComplete={true}
                  message="Please complete a task"
                />
              </AwaitLoading>
            </Todos>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
