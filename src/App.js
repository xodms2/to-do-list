import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoArr, setToDoArr] = useState([]);
  // const [completed, setCompleted] = useState(false);

  
  const handleSubmitToDo = (e) => {
    e.preventDefault();
    
    const toDoObj = {
      toDo: toDo,
      completed: false,
    }  

    setToDoArr([...toDoArr, toDoObj]);
    setToDo("");
  }

  const handleDelete = (index) => {
    const filteredToDo = toDoArr.filter((_toDoItem, idx) => idx !== index );
    setToDoArr(filteredToDo)
  }

  const handleCompleted = (idx) =>{
    const updatedToDos = toDoArr.map((toDo, index) => {
      if (idx === index) {
        toDo.completed = !toDo.completed;
        
      }

      return toDo;
    });
    
    setToDoArr(updatedToDos);
  }

  return (
    <div className="App">
      {/* <h3>{JSON.stringify(toDoArr)}</h3> */}
      <form onSubmit={ (e) => handleSubmitToDo(e) }>
        <p>To Do:</p>
        <input 
          type="text" 
          name="todo" 
          id="todo"
          value={toDo}
          onChange={ (e) => setToDo(e.target.value) }
        />
        <button id="btn">Add</button>
      </form>
      
      <hr />

      <h2>To Do List</h2>
      {toDoArr.map((toDoObj, index) => {
        const toDoClasses =[]

        if (toDoObj.completed) {
          toDoClasses.push("strike-through");
        }
        
        return (
          <div key={index}>
            <input onChange={(e) => {
              handleCompleted(index);
            }} checked={toDoObj.completed} type="checkbox"></input>
            <span className={toDoClasses.join(" ")} key={index}>To Do # {index+1}: {toDoObj.toDo}</span>
            {/* <input type="checkbox" onChange={ () => handleCompleted(toDoItem.completed)}/> */}
            <button onClick={() => handleDelete(index)} style={{marginLeft: "15px"}}>Delete</button>
          </div>
        )
      })
      }
    </div>
  );
}

export default App;
