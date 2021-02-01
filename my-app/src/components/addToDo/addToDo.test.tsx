import React from "react";
import { shallow } from "enzyme";
import AddTodo from "./index";
import { Button, Form } from "react-bootstrap";

describe("<AddTodo />", () => {
  it("renders AddTodo", () => {
    const component = shallow(<AddTodo />);
    expect(component).toMatchSnapshot();
    expect(component.find(Form.Control).length).toEqual(2);
    expect(component.find(Button).length).toEqual(1);
    expect(component.find(Button).text()).toEqual("Add Task");
  });
});
