import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { shuffledQuotesData } from "./dnd/mockData2";
import Board from "./dnd/board/Board";
import { useNavigate } from "react-router-dom";

const Exam2 = () => {
  const { authors, authorQuoteMap } = shuffledQuotesData;
  const data = {
    medium: authorQuoteMap(),
  };

  const navigate = useNavigate();

  const handleClickHome = () => {
    // Navigate back to the homepage when the "Home" button is clicked
    navigate("/independent-work2");
  };

  const handleDownloadPDF = () => {
    // Open the specified URL in a new tab when the "Download PDF" button is clicked
    window.open("https://www.cs.princeton.edu/courses/archive/fall23/cos126/static/exams/s23-pe1/exam.pdf", "_blank");
  };

  return (
    <>
      <Row className="justify-content-center text-center">
        <Col xs={12}>
          <Card>
            <CardBody className="text-center">
              {/* Heading centered */}
              <h2>ChefOlympics.java</h2>
              <Row className="justify-content-between">
                <Col xs={6} className="text-left">
                  {/* "Home" button */}
                  <button className="btn btn-primary" onClick={handleClickHome}>
                    Home
                  </button>
                </Col>
                <Col xs={6} className="text-right">
                  {/* "Exam" button */}
                  <button className="btn btn-secondary" onClick={handleDownloadPDF}>
                    Exam Instructions
                  </button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Board 
        initial={data.medium}
        withScrollableColumns
        authors={authors}
      />
    </>
  );
};

export default Exam2;
