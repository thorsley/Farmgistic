import React from "react";
// import { render } from '@testing-library/react';
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Booth from "./booth";

const Container = styled.div`
    margin: 8px;
    border: 10px solid lightgrey:
    border-radius: 2px;
    width: fit;
    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const BoothList = styled.div`
  padding: 4px;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: 200px;
  // display: flex;
`;

export default class Column extends React.Component {

  render() {
    {
      console.log(this.props);
    }
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable
          droppableId={this.props.column.id}
          // type={this.props.column.id === 'column-3' ? 'done' : 'active'}
          // isDropDisabled={this.props.isDropDisabled}
        >
          {(provided, snapshot) => (
            <BoothList
              ref={provided.innerRef}
              innerRef={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.booth.length ? this.props.booth.map((booth, index) => (
                <Booth
                  key={booth.id}
                  booth={booth}
                    // boothData={boothData}
                  index={index}
                />
              )) : <span></span>}
              {provided.placeholder}
            </BoothList>
          )}
        </Droppable>
      </Container>
    );
  }
}