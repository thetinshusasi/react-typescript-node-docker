import React from "react";
import { shallow } from "enzyme";
import AwaitLoading from "./index";
import { Spinner } from "react-bootstrap";
// import { Button, Form } from "react-bootstrap";

describe("<AwaitLoading />", () => {
  it("renders AwaitLoading", () => {
    const content = <div>Test</div>;
    const component = shallow(<AwaitLoading>{content}</AwaitLoading>);
    expect(component).toMatchSnapshot();
  });
  it("renders AwaitLoading loading", () => {
    const content = <div>Test</div>;
    const component = shallow(
      <AwaitLoading loading={true}>{content}</AwaitLoading>
    );
    expect(component.find(Spinner).length).toEqual(1);
  });
  it("renders AwaitLoading error", () => {
    const content = <div>Test</div>;
    const component = shallow(
      <AwaitLoading error="error">{content}</AwaitLoading>
    );
    expect(component.find(".spinnerContainer").text()).toEqual("error");
  });
});
