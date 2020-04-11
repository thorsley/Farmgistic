import React from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./initial-data";
import Column from "./column";

const Container = styled.div`
  display: flex;
`;
let boothData = "here";

class DragnDrop extends React.Component {
  componentWillMount() {
    fetch("http://localhost:3003/booth/", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg2NjIyNzYxLCJleHAiOjE1ODY3MDkxNjF9.kQCcnantDKd9wAqN09HYVDG79j0kVPh7hjpiHjBmhZY",
        // 'Authorization': props.token
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        boothData = data;
      })
      .catch((error) => console.error("Error:", error));
  }
  state = initialData;
  // CONTRIVED! usually just rely on snapshot values & only onDragEnd is required
  // onDragStart = () => {
  //   document.body.style.color = 'orange';
  //   document.body.style.transition = 'background-color 0.2s ease';
  // };

  // onDragUpdate = update => {
  //   const { destination } = update;
  //   const opacity = destination
  //   ? destination.index / Object.keys(this.state.tasks).length : 0;
  // document.body.style.backgroundColor = `rbga(153, 141, 217, ${opacity})`;
  // }

  onDragEnd = (result) => {
    // document.body.style.color = 'inherit';
    // document.body.style.backgroundColor = 'inherit';

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];
    console.log(this.state.columns[destination.droppableId]);

    if (start === finish) {
      const newTaskIds = Array.from(start.boothIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        boothIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    // moving from one list to another
    const startTaskIds = Array.from(start.boothIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      boothIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.boothIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      boothIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };
  order = ["column-1", "column-2", "column-3"];
  i = 3;
  // names = "column-4";
  addColumn = () => {
    if (this.i == 3) {
      this.i++;
      this.order.push("column-4", "column-5");
      {
        this.setState({
          columns: {
            ...this.state.columns,
            "column-4": {
              id: "column-4",
              title: "column 3",
              boothIds: [],
            },
            "column-5": {
              id: "column-5",
              title: "column 4",
              boothIds: [],
            },
          },
          columnOrder: this.order,
        });
      }
      console.log(boothData);
    } else {
    }
  };

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
        // onDragStart={this.onDragStart}
        // onDragUpdate={this.onDragUpdate}
      >
        <button onClick={this.addColumn}>Add Column</button>
        <Container>
          {this.state.columnOrder.map((columnId) => {
            const column = this.state.columns[columnId];
            const booth = column.boothIds.map(
              (boothId) => this.state.booths[boothId]
            );

            return (
              <Column
                key={column.id}
                column={column}
                booth={booth}
                boothData={boothData}
              />
            );
          })}
        </Container>
      </DragDropContext>
    );
  }
}

export default DragnDrop;
