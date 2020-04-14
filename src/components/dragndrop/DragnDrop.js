import React from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./initial-data";
import Column from "./column";

const Container = styled.div`
  display: flex;
`;
// let boothData = [];

class DragnDrop extends React.Component {
  state = initialData;
  componentDidMount() {
    fetch("http://localhost:3003/booth/", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",

        Authorization: localStorage.token,
      }),
    })
      .then((res) => res.json())
      .then(function (data) {
        // console.log( data)
        return data.map((post) => {
          return {
            id: (post.id - 1).toString(),
            farmName: post.farmName,
            address: post.address,
            URL: post.URL,
            bio: post.bio,
            atMarket: post.atMarket,
            likes: post.likes,
            marketId: post.marketId,
          };
        });
        console.log(data);
        // boothData = data;
      })
      .then((data) => {
        console.log(data);
        // this.state.booths = data
        this.setState({
          ...this.state,
          columns: {
            ...this.state.columns,
            boothIds: data.map((boothId, key) => boothId.id),
          },
          booths: data,
        });
        console.log(this.state);
      })
      //   .then({this.setState({
      //     ...this.state,
      //     columns: {
      //       boothIds: this.state.booths.id
      //     }
      //   })
      // })
      .catch((error) => console.error("Error:", error));
  }

  onDragEnd = (result) => {
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
    console.log(start.boothIds);

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
      console.log(this.state.booths);
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
        <button onClick={this.addColumn}>Add 2 Columns</button>
        {/* <button onClick={this.fetchBooths()}>Refresher</button> */}
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
                // boothData={boothData}
              />
            );
          })}
        </Container>
      </DragDropContext>
    );
  }
}

export default DragnDrop;
