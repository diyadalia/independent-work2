// @flow
import React, { useState } from "react";
import styled from "@xstyled/styled-components";
import { colors } from "@atlaskit/theme";
import PropTypes from "prop-types";
import Column from "./Column";
import reorder, { reorderQuoteMap } from "../reorder";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

  const Container = styled.div`
  background-color: ${colors.B100};
  min-height: 100vh;
  min-width: 100vw;
  display: flex;  /* Use flex container to arrange columns */
`;

const ColumnContainer = styled.div`
  flex: 1;  /* Each column takes equal space */
  padding: 8px;  /* Adjust the padding as needed */
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Button = styled.button`
  margin: 200px 10px;
  background-color: #bebebe;
  color: black;
  border: none;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

const Board = ({
  isCombineEnabled,
  initial, 
  useClone,
  containerHeight,
  withScrollableColumns
}) => {
  const [columns, setColumns] = useState(initial);
  const [ordered, setOrdered] = useState(Object.keys(initial));

  const isDropAllowed = (source, destination) => {
    const sourceCols = ["distance() Pseudocode","allDistances() Pseudocode", "findMin() Pseudocode", "main() Pseudocode",
    "distance() Bank", "allDistances() Bank", "findMin() Bank", "main() Bank"]
    const destCols = ["distance() Bank", "allDistances() Bank", "findMin() Bank", "main() Bank", 
    "distance() Pseudocode","allDistances() Pseudocode", "findMin() Pseudocode", "main() Pseudocode"];

    const sourceIndex = sourceCols.indexOf(source.droppableId);
    const destIndex = destCols.indexOf(destination.droppableId);
   
    return (sourceIndex == destIndex);
  };

const onDragEnd = (result) => {
  if (!result.destination) {
    return;
  }

  const { source, destination, combine } = result;

  // Check if the drag is within the same column
  if (source.droppableId === destination.droppableId) {
    const columnKey = source.droppableId;
    const quotesInColumn = [...columns[columnKey]];
    const [removedQuote] = quotesInColumn.splice(source.index, 1);
    quotesInColumn.splice(destination.index, 0, removedQuote);

    setColumns({
      ...columns,
      [columnKey]: quotesInColumn,
    });
  } else if (combine) {
    // Handle the case where a quote is combined with another column
    const sourceColumnKey = source.droppableId;
    const destinationColumnKey = destination.droppableId;

    const sourceColumn = [...columns[sourceColumnKey]];
    const destinationColumn = [...columns[destinationColumnKey]];

    const [removedQuote] = sourceColumn.splice(source.index, 1);
    destinationColumn.splice(destination.index, 0, removedQuote);

    setColumns({
      ...columns,
      [sourceColumnKey]: sourceColumn,
      [destinationColumnKey]: destinationColumn,
    });
  } else {
    // Handle the case where a quote is moved to a different column
    const isMoveAllowed = isDropAllowed(source, destination);

    if (isMoveAllowed) {
      const sourceColumnKey = source.droppableId;
      const destinationColumnKey = destination.droppableId;

      const sourceColumn = [...columns[sourceColumnKey]];
      const destinationColumn = [...columns[destinationColumnKey]];

      const [removedQuote] = sourceColumn.splice(source.index, 1);
      destinationColumn.splice(destination.index, 0, removedQuote);

      setColumns({
        ...columns,
        [sourceColumnKey]: sourceColumn,
        [destinationColumnKey]: destinationColumn,
      });
    }
  }
};

const handleButtonClick = (buttonId) => {
  // Check which quotes have been put in the pseudocode section
  const pseudoKey = ordered[buttonId];
  const quotesInPseudo = columns[pseudoKey];

  for (let i = 0; i < quotesInPseudo.length; i++) {
    const correct = quotesInPseudo[i].isCorrect;
    const pos = quotesInPseudo[i].finalPos;
    if (correct && (pos == i)) {
      console.log('true!');
    }
    else if (correct && (pos != i)) {
      console.log('wrong position!');
    }
    else {
      console.log('NOT a line of pseudocode');
    }
  }

  columns[pseudoKey] = quotesInPseudo.map((quote, index) => ({...quote, currLoc: (quote.isCorrect === true && quote.finalPos === index)}))

  // Check if any correct quotes are still in the code bank
  const bankKey = ordered[buttonId+4];
  const quotesInBank = columns[bankKey];

  for (let i = 0; i < quotesInBank.length; i++) {
    const correct = quotesInBank[i].isCorrect;
    if (correct) {
      console.log('this should be in the pseudocode!');
    }
  }

  columns[bankKey] = quotesInBank.map((quote) => ({...quote, currLoc: (!quote.isCorrect)}))

  setColumns({ ...columns });
};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="board"
        type="COLUMN"
        direction="horizontal"
        ignoreContainerClipping={Boolean(containerHeight)}
        isCombineEnabled={isCombineEnabled}
        isDropAllowed={isDropAllowed} 

      >
        {(provided) => (
          <Container ref={provided.
          Ref} {...provided.droppableProps}>
            <ColumnContainer>
              {ordered.slice(0, 4).map((key, index) => (
                <Column
                  key={key}
                  index={index}
                  title={key}
                  quotes={columns[key]}
                  isScrollable={withScrollableColumns}
                  isCombineEnabled={isCombineEnabled}
                  useClone={useClone}
                  isDropAllowed={isDropAllowed}
                />
              ))}
            </ColumnContainer>
            <ColumnContainer>
              {ordered.slice(4, 8).map((key, index) => (
                <Column
                  key={key}
                  index={index + 4}
                  title={key}
                  quotes={columns[key]}
                  isScrollable={withScrollableColumns}
                  isCombineEnabled={isCombineEnabled}
                  useClone={useClone}
                  isDropAllowed={isDropAllowed}
                />
              ))}
            </ColumnContainer>
            <ColumnContainer>
              <ButtonContainer>
              <Button onClick={() => handleButtonClick(0)}>Check Pseudocode</Button>
                <Button onClick={() => handleButtonClick(1)}>Check Pseudocode</Button>
                <Button onClick={() => handleButtonClick(2)}>Check Pseudocode</Button>
                <Button onClick={() => handleButtonClick(3)}>Check Pseudocode</Button>
              </ButtonContainer>
              
            </ColumnContainer>
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};
Board.defaultProps = {
  isCombineEnabled: false
};

Board.propTypes = {
  isCombineEnabled: PropTypes.bool,
};

export default Board;

