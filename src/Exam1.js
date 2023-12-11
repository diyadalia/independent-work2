// Exam1.js
import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { shuffledQuotesData } from "./dnd/mockData1";
import Board from "./dnd/board/Board";
import { useNavigate } from "react-router-dom";

const Exam1 = () => {
  const { authorQuoteMap } = shuffledQuotesData;
  const data = {
    medium: authorQuoteMap(),
  };

  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate back to the homepage when the button is clicked
    navigate("/app");
  };

  return (
    <>
      <Row className="justify-content-center text-center">
        <Col xs={12}>
          <Card>
            <CardBody>
              <h2>FindEVStations.java</h2>
              {/* Add a button with an onClick handler */}
              <button className="btn btn-primary" onClick={handleClick}>
                Home
              </button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Board initial={data.medium} withScrollableColumns />
    </>
  );
};

export default Exam1;
