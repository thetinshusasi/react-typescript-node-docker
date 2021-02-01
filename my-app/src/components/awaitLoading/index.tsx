import React, { ReactElement } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import "./index.scss";

interface AwaitLoadingProps {
  error?: string;
  loading?: boolean;
  children?: React.ReactNode;
}

export default function AwaitLoading({
  error,
  loading,
  children,
}: AwaitLoadingProps) {
  let content = (
    <Row>
      <Col xs={12} className="content">
        {children}
      </Col>
    </Row>
  );

  if (error) {
    content = (
      <Row>
        <Col xs={12} className="spinnerContainer">
          {error}
        </Col>
      </Row>
    );
  }
  if (loading) {
    content = (
      <Row>
        <Col xs={12} className="spinnerContainer">
          <Spinner animation="border" variant="primary" />
        </Col>
      </Row>
    );
  }

  return <React.Fragment>{content}</React.Fragment>;
}
