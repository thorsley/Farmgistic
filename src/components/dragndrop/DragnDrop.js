import React, {Component} from 'react';
import './dragndrop.css'
class DragnDrop extends Component {
    state = {
        tasks:[
            {name:"moon valley",category:"VendorTable", bgcolor: "yellow"},
            {name:"3 flock farms", category:"VendorTable", bgcolor:"pink"},
            {name:"becker", category:"booths", bgcolor:"skyblue"}
        ]
      }

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
        // document.createElement('div')
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }
    
    render() { 
        
        
        var test = {
            VendorTable:[],
            booths:[],
            row1:[],
            row2:[]
    
        }
        var tasks =test
        for(let i =1 ; i<5; i++){
            test[`row ${i}` ]=[]
            console.log(test)
        }
        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}>
                    {t.name}
                </div>
            );
        });
        const newElement = document.createElement('div');
        
        // newElement.setAttribute('onDrop', '{(e)=>{this.onDrop(e, "VendorTable")}}');
        for(let i = 1;i<5;i++){
            newElement.innerHTML += `<div id=${i}>${i}</div>`;
           
        }
        //     let wrapper = document.getElementsByClassName('wrapper')
        //     // wrapper.innerHTML +=`<div>${i}</div>`
        //     var newDiv = document.createElement('div');
           
        //     // newDiv.id = 'r'+ i;
        //     // newDiv.className = 'ansbox';
        //     // toAdd.appendChild(newDiv);
        //     // wrapper.appendChild(newDiv);
        
        //     // wrapper.appendChild(newDiv);
        // }
        // // document.getElementById('test').appendChild('toAdd');

        
        // newElement.innerText = 'portal element';
        return (<div>
            <p> test</p>
                
            <div className='wrapper'id="non-portal" ref={node => node.appendChild(newElement)}>
            <div onDragOver={(e)=>this.onDragOver(e)}
            onDrop={(e)=>{this.onDrop(e, "VendorTable")}} >
            <h1>VendorTable</h1>
            {tasks.VendorTable}
            </div> 
{/* 
            <div onDragOver={(e)=>this.onDragOver(e)}
            onDrop={(e)=>this.onDrop(e, "booths")}>
            <h1>booths</h1>
            {tasks.booths}
            </div>

            <div onDragOver={(e)=>this.onDragOver(e)}
            onDrop={(e)=>this.onDrop(e, "row1")}>
            <h1>Row1</h1>
            {tasks.row1}
    
            </div> */}
            </div>
        </div> 
         );
    }
}
 
export default DragnDrop;