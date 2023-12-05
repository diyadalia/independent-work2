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
  
    const src = result.source;
    const dest = result.destination;
  
    if (!isDropAllowed(src, dest)) {
      return;
    }
  
    if (result.combine) {
      if (result.type === "COLUMN") {
        const shallow = [...ordered];
        shallow.splice(result.source.index, 1);
        setOrdered(shallow);
        return;
      }
  
      const column = columns[result.source.droppableId];
      const withQuoteRemoved = [...column];
  
      withQuoteRemoved.splice(result.source.index, 1);
  
      const orderedColumns = {
        ...columns,
        [result.source.droppableId]: withQuoteRemoved
      };
      setColumns(orderedColumns);
      return;
    }
  
    if (result.type === "COLUMN") {
      const reorderedorder = reorder(ordered, src.index, dest.index);
  
      setOrdered(reorderedorder);

       // Send the updated column order back to the parent component
       if (onColumnOrderChange) {
        onColumnOrderChange(reorderedorder);
      }
  
      return;
    }
  
    const data = reorderQuoteMap({
      quoteMap: columns,
      source: src,
      destination: dest
    });
  
    setColumns(data.quoteMap);
  };

  const handleButtonClick = (buttonId) => {
    // Check quotes in the corresponding column based on the button's id
    const columnKey = ordered[buttonId];
    const quotesInColumn = columns[columnKey];

    for (let i = 0; i < quotesInColumn.length; i++) {
      console.log(quotesInColumn[i]);
      if (quotesInColumn[i].isCorrect) {
        console.log('true');
      }
      else {
        console.log('false');
      }

    }
   
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="board"
        type="COLUMN"
        direction="horizontal"
        ignoreContainerClipping={Boolean(containerHeight)}
        isCombineEnabled={isCombineEnabled}
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

