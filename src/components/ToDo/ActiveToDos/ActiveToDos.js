import {useState} from 'react';
import ToDo from '../ToDo';

import './ActiveToDos.css';

import completeIcon from '../../../images/complete-single-black.svg';
import deleteIcon from '../../../images/delete-black.svg';
import doubleArrowIcon from '../../../images/double-arrow-black.svg';

const ActiveToDos = (props) => {
    // Tracks the key values of currently selected ToDos
    const [checked, setChecked] = useState([]);

    // Adds ToDo to checked array when selected
    const addCheckedHandler = (id) => {
        setChecked((currentValues) => {
            return [
                id,
                ...currentValues
            ]
        })
    }

    // Removes ToDo from checked array when deselected
    const removeCheckedHandler = (id) => {
        setChecked((currentValues) => {
            return currentValues.filter(todoID => todoID !== id)
        })
    }

    // Send checked array to parent component to complete ToDos
    const completeHandler = () => {
        props.completeToDos(checked);
    }

    // Send checked array to parent component to delete ToDos
    const deleteHandler = () => {
        props.deleteToDos(checked);
    }

    // Create output of all active ToDos
    const activeToDos = props.activeToDoValues.map((curr) => {
        return <ToDo key={curr.key} id={curr.key} title={curr.title} datetime={curr.datetime} isComplete={false} addChecked={addCheckedHandler} removeChecked={removeCheckedHandler}/>
    })

    // Focus input on click of floating message
    const focusInput = () => {
        document.querySelector('.to-do-form input').focus();
    }

    // Show ToDos if they exist
    if(activeToDos.length > 0){
        return(
            <div className="active-to-do-wrapper">
                <div className="actions-wrapper">
                    <img src={completeIcon} alt="Complete" title="Complete To-Do" onClick={completeHandler} />
                    <img src={deleteIcon} alt="Complete" title="Delete To-Do" onClick={deleteHandler} />
                </div>
                <div className="active-to-dos">
                    {activeToDos}
                </div>
            </div>
        )
    // Else show floating message
    }else{
        return(
            <div className="active-to-do-wrapper" onClick={focusInput}>
                <div className="floating">
                    <img className="inline up-arrow" src={doubleArrowIcon} alt="Double Arrow" />
                    <h2 className="inline">Try adding a To-Do!</h2>
                    <img className="inline up-arrow" src={doubleArrowIcon} alt="Double Arrow" />
                </div>
            </div>
        )
    }
}

export default ActiveToDos;
