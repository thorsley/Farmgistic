import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 3px solid lightgrey;
  border-radius: 10px;
  padding: 4px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? "#E5ED9C" : "inherit")};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  color: #191919;
  &:focus {
    outline: none;
    border-color: red;
  }
`;

// const Handle = styled.div`
//     width: 20px;
//     height: 20px;
//     background-color: orange;
//     border-radius: 4px;
//     margin-right: 8px;
// `;
export default class Booth extends React.Component {
  render() {
    // const isDragDisabled = this.props.task.id === 'task-1'
    return (
      <Draggable
        draggableId={this.props.booth.id}
        index={this.props.index}
        // isDragDisabled={isDragDisabled}
      >
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
            isDragging={snapshot.isDragging}
            // isDragDisabled={isDragDisabled}
          >
            {/* <Handle {...provided.dragHandleProps} /> */}
            {/* {this.props.booth.content} */}
            {this.props.booth.farmName}
          </Container>
        )}
      </Draggable>
    );
  }
}
