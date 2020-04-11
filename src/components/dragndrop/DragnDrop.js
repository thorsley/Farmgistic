// import React, {Component} from 'react';
// import './dragndrop.css'
// class DragnDrop extends Component {
//     state = {
//         tasks:[
//             {name:"moon valley",category:"VendorTable", bgcolor: "yellow"},
//             {name:"3 flock farms", category:"VendorTable", bgcolor:"pink"},
//             {name:"becker", category:"booths", bgcolor:"skyblue"}
//         ]
//       }

//     onDragStart = (ev, id) => {
//         console.log('dragstart:',id);
//         ev.dataTransfer.setData("id", id);
//         // document.createElement('div')
//     }

//     onDragOver = (ev) => {
//         ev.preventDefault();
//     }

//     onDrop = (ev, cat) => {
//        let id = ev.dataTransfer.getData("id");
       
//        let tasks = this.state.tasks.filter((task) => {
//            if (task.name == id) {
//                task.category = cat;
//            }
//            return task;
//        });

//        this.setState({
//            ...this.state,
//            tasks
//        });
//     }
    
//     render() { 
        
        
//         var test = {
//             VendorTable:[],
//             booths:[],
//             row1:[],
//             row2:[]
    
//         }
//         var tasks =test
//         for(let i =1 ; i<5; i++){
//             test[`row ${i}` ]=[]
//             console.log(test)
//         }
//         this.state.tasks.forEach ((t) => {
//             tasks[t.category].push(
//                 <div key={t.name} 
//                     onDragStart = {(e) => this.onDragStart(e, t.name)}
//                     draggable
//                     className="draggable"
//                     style = {{backgroundColor: t.bgcolor}}>
//                     {t.name}
//                 </div>
//             );
//         });
//         const newElement = document.createElement('div');
        
//         // newElement.setAttribute('onDrop', '{(e)=>{this.onDrop(e, "VendorTable")}}');
//         for(let i = 1;i<5;i++){
//             newElement.innerHTML += `<div id=${i}>${i}</div>`;
           
//         }
//         //     let wrapper = document.getElementsByClassName('wrapper')
//         //     // wrapper.innerHTML +=`<div>${i}</div>`
//         //     var newDiv = document.createElement('div');
           
//         //     // newDiv.id = 'r'+ i;
//         //     // newDiv.className = 'ansbox';
//         //     // toAdd.appendChild(newDiv);
//         //     // wrapper.appendChild(newDiv);
        
//         //     // wrapper.appendChild(newDiv);
//         // }
//         // // document.getElementById('test').appendChild('toAdd');

        
//         // newElement.innerText = 'portal element';
//         return (<div>
//             <p> test</p>
                
//             <div className='wrapper'id="non-portal" ref={node => node.appendChild(newElement)}>
//             <div onDragOver={(e)=>this.onDragOver(e)}
//             onDrop={(e)=>{this.onDrop(e, "VendorTable")}} >
//             <h1>VendorTable</h1>
//             {tasks.VendorTable}
//             </div> 
// {/* 
//             <div onDragOver={(e)=>this.onDragOver(e)}
//             onDrop={(e)=>this.onDrop(e, "booths")}>
//             <h1>booths</h1>
//             {tasks.booths}
//             </div>

//             <div onDragOver={(e)=>this.onDragOver(e)}
//             onDrop={(e)=>this.onDrop(e, "row1")}>
//             <h1>Row1</h1>
//             {tasks.row1}
    
//             </div> */}
//             </div>
//         </div> 
//          );
//     }
// }
 
// export default DragnDrop;

import React from 'react';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';

const Container = styled.div`
  display: flex;
`;

class DragnDrop extends React.Component {
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

  onDragEnd = result => {
    // document.body.style.color = 'inherit';
    // document.body.style.backgroundColor = 'inherit';

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId ===source.droppableId && destination.index === source.index
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
          [newColumn.id]:newColumn,
        },
      };
  
      this.setState(newState);
      return;
    }

    // moving from on list to another
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
    this.setState(newState)
  };

  render() {
    return (
      <DragDropContext 
        onDragEnd={this.onDragEnd}
        // onDragStart={this.onDragStart}
        // onDragUpdate={this.onDragUpdate}
      >
        <Container>
          {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const booth = column.boothIds.map(boothId => this.state.booths[boothId]);
      
            return <Column key={column.id} column={column} booth={booth} />;
        
          })}
        </Container>
      </DragDropContext>
    )
  }
}

export default DragnDrop;