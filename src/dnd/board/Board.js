// @flow
import React, { useState } from "react";
import styled from "@xstyled/styled-components";
import { colors } from "@atlaskit/theme";
import PropTypes from "prop-types";
import Column from "./Column";
import reorder, { reorderQuoteMap } from "../reorder";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { borderRadius, grid } from '../styles/constants';


  const Container = styled.div`
  background-color: #D8B2E3;
  display: flex;  
  flex: 1
`;

const ColumnContainer = styled.div`
  flex: 1;  
  align-items: center
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  height: 100%;
  margin: 0% 0;
`;

const Button = styled.button`
  background-color: #bebebe;
  color: black;
  padding: ${grid}px;
  width: 150px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  justify-content: center;
`;

const Board = ({
  isCombineEnabled,
  initial, 
  useClone,
  containerHeight,
  withScrollableColumns,
  authors
}) => {
  const [columns, setColumns] = useState(initial);
  const [ordered, setOrdered] = useState(Object.keys(initial));
  
  const authorsArray = authors.map((author) => author.name);
  const halfLength = authors.length / 2.0;
  const sourceCols = authorsArray;
  const destCols = authorsArray.slice(halfLength).concat(authorsArray.slice(0, halfLength));

  const isDropAllowed = (source, destination) => {
    const sourceIndex = sourceCols.indexOf(source.droppableId);
    const destIndex = destCols.indexOf(destination.droppableId);
    return sourceIndex === destIndex;
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

const getPseudoWarning = (quote) => {
  const { isCorrect, finalPos } = quote;

  if (isCorrect && finalPos === quote.index) {
    return;
  } else if (isCorrect && finalPos !== quote.index) {
    quote.currLoc = false;
    return 'Incorrect position';
  } else {
    quote.currLoc = false;
    return 'This should not be in the pseudocode';
  }
};

const getBankWarning = (quote) => {
  const { isCorrect } = quote;

  if (isCorrect) {
    quote.currLoc = false;
    return 'This should be in the pseudocode';
  }
};

const handleButtonClick = (buttonId) => {
  // Check which quotes have been put in the pseudocode section
  const pseudoKey = ordered[buttonId];
  const quotesInPseudo = columns[pseudoKey];
  const pseudoWarnings = quotesInPseudo.map(getPseudoWarning);

  columns[pseudoKey] = quotesInPseudo.map((quote, index) => ({
    ...quote,
    currLoc: quote.isCorrect === true && quote.finalPos === index,
    warning: pseudoWarnings[index], // Pass the specific warning message
  }));

  // Check if any correct quotes are still in the code bank
  const bankKey = ordered[buttonId + halfLength];
  const quotesInBank = columns[bankKey];
  const bankWarnings = quotesInBank.map(getBankWarning);

  columns[bankKey] = quotesInBank.map((quote, index) => ({
    ...quote,
    currLoc: !quote.isCorrect,
    warning: bankWarnings[index], // Pass the specific warning message
  }));

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
              {ordered.slice(0, halfLength).map((key, index) => (
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
              {ordered.slice(halfLength).map((key, index) => (
                <Column
                  key={key}
                  index={index + halfLength}
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
                {Array.from({ length: halfLength }, (_, index) => (
                  <Button key={index} onClick={() => handleButtonClick(index)}>
                    Check Pseudocode
                  </Button>
                ))}
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
  initial: PropTypes.object.isRequired,
  useClone: PropTypes.bool,
  containerHeight: PropTypes.number,
  withScrollableColumns: PropTypes.bool,
  authors: PropTypes.array.isRequired,
};

export default Board;

