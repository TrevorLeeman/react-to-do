import {useState} from 'react'
import ToDo from '../ToDo'

import './ActiveToDos.css'

import completeIcon from '../../../images/complete-single-black.svg'
import deleteIcon from '../../../images/delete-black.svg'
import doubleArrowIcon from '../../../images/double-arrow-black.svg'

const ActiveToDos = (props) => {
    const activeToDos = props.toDoValues.map((curr) => {
        return <ToDo key={curr.key} title={curr.title} datetime={curr.datetime} />
    })

    const focusInput = () => {
        document.querySelector('.to-do-form input').focus();
    }

    if(activeToDos.length > 0){
        return(
            <div className="active-to-do-wrapper">
                <div className="actions-wrapper">
                    <img src={completeIcon} alt="Complete" title="Complete To-Do"/>
                    <img src={deleteIcon} alt="Complete" title="Delete To-Do"/>
                </div>
                <div className="active-to-dos">
                    {activeToDos}
                </div>
            </div>
        )
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

export default ActiveToDos
