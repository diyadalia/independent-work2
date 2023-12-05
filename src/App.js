import React from "react";

import { Row, Col, Card, CardBody } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import { authorQuoteMap } from "./dnd/mockData";

import Board from "./dnd/board/Board";

export default function App() {
  const data = {
    medium: authorQuoteMap()
  };

  return (
    <>
      <Row className="justify-content-center text-center">
        <Col xs={12}>
          <Card>
            <CardBody>
              <h2>FindEVStations.java</h2>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Board initial={data.medium} withScrollableColumns />
    </>
  );
}
