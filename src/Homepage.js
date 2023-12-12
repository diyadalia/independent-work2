// HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";

const HomePage = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1 className="display-4">Welcome to My App</h1>
          <p className="lead">Explore the world of programming with ease.</p>
          <p>
            Pseudocode is a way of planning out a program using plain
            language that resembles actual code. It helps programmers
            visualize and structure their algorithms before writing
            actual code.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p>Select one of the following exams to get started</p>
          <Card>
            <Link to="/exam1" className="exam-link">
              <CardBody className="exam-card">
                <h2>Fall '23 Programming Exam 1</h2>
              </CardBody>
            </Link>
            <Link to="/exam2" className="exam-link">
              <CardBody className="exam-card">
                <h2>Spring '23 Programming Exam 1</h2>
              </CardBody>
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;



