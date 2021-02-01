import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";
import AddTodo from "../components/addToDo";
import AwaitLoading from "../components/awaitLoading";
import ToDoList from "../components/toDoList";
import Todos from "../containers/todos";

describe("<Home />", () => {
  it("renders Home", () => {
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
    expect(component.find(AddTodo).length).toEqual(1);
    expect(component.find(Todos).length).toEqual(2);
    expect(component.find(AwaitLoading).length).toEqual(2);
    expect(component.find(ToDoList).length).toEqual(2);
  });
});
