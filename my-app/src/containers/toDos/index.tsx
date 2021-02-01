import React from "react";
import { Col, Row } from "react-bootstrap";
import "./index.scss";
export interface IToDoListProps {
  title: string;
  children?: React.ReactNode;
}

export default function ToDos({ title, children }: IToDoListProps) {
  return (
    <Row className="listContainer">
      <Col sm={12} className="title">
        <h4>{title}</h4>
      </Col>
      <Col sm={12}>{children}</Col>
    </Row>
  );
}
