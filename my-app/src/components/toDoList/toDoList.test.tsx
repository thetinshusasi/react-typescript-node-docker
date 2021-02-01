import React from "react";
import { shallow } from "enzyme";
import ToDoList from "./index";
import { Button, Table } from "react-bootstrap";
import IToDoItem from "../../models/interfaces/todoItem";
import { Status } from "../../models/enums/status";

describe("<ToDoList />", () => {
  it("renders ToDoList", () => {
    const component = shallow(<ToDoList />);
    expect(component).toMatchSnapshot();
    expect(component.find(".message").text()).toEqual(" No items in list");
    expect(component.find(Table).length).toEqual(1);
  });
  it("renders ToDoList with todos", () => {
    const todos: IToDoItem[] = [
      {
        _id: "id",
        title: "title",
        description: "description",
        status: Status.PENDING,
      },
    ];
    const component = shallow(<ToDoList todos={todos} />);
    expect(component.find(Button).length).toEqual(2);
  });
});
