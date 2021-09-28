import {useState} from 'react'

import Form from './components/Form/Form'
import ActiveToDos from './components/ToDo/ActiveToDos/ActiveToDos'
import CompletedToDos from './components/ToDo/CompletedToDos/CompletedToDos'

import './App.css';

function App() {
  const [toDos, setToDos] = useState([])

  const formSubmitHandler = (newToDo) => {
    setToDos((currentValues) => {
      return [
        newToDo,
        ...currentValues
      ]
    })
  }

  const deleteToDos = () => {
    
  }

  return (
    <div className="App">
      <Form submitHandler={formSubmitHandler}/>
      <ActiveToDos toDoValues={toDos} deleteToDos={deleteToDos}/>
      <CompletedToDos />
    </div>
  );
}

export default App
