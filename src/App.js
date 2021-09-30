import {useState} from 'react';

import Form from './components/Form/Form';
import ActiveToDos from './components/ToDo/ActiveToDos/ActiveToDos';
import CompletedToDos from './components/ToDo/CompletedToDos/CompletedToDos';

import './App.css';

function App() {
  const [activeToDos, setActiveToDos] = useState([]);
  const [completeToDos, setCompleteToDos] = useState([]);

  // On submit, add new ToDo to array of existing ToDos
  const formSubmitHandler = (newToDo) => {
    setActiveToDos((currentValues) => {
      return [
        newToDo,
        ...currentValues
      ]
    })
  }

  // On click of delete button, remove checked ToDos from array
  const deleteToDoHandler = (keysToDelete) => {
    // Removed ToDos from active state
    setActiveToDos((currentValues) => {
      return currentValues.filter(ToDo => !keysToDelete.includes(ToDo.key))
    })
  }

  // On click of complete button, move ToDos from active array to complete array
  const completeToDoHandler = (keysToComplete) => {
    // Create an array of ToDo objects to bo completed
    const completedToDos = activeToDos.filter(ToDo => keysToComplete.includes(ToDo.key));

    // Removed completed ToDos from active state
    setActiveToDos((currentValues) => {
      return currentValues.filter(ToDo => !keysToComplete.includes(ToDo.key))
    })

    // Add completed ToDos to completed state
    setCompleteToDos((currentValues) => {
      return [
        ...completedToDos,
        ...currentValues
      ]
    })
  }

  return (
    <div className="App">
      <Form submitHandler={formSubmitHandler}/>
      <ActiveToDos activeToDoValues={activeToDos} completeToDos={completeToDoHandler} deleteToDos={deleteToDoHandler} />
      <CompletedToDos completedToDoValues={completeToDos} />
    </div>
  );
}

export default App;
