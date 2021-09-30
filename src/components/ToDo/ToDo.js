import {useState} from 'react';

import './ToDo.css';

import checkbox from '../../images/checkbox-black.svg';
import checkboxFilled from '../../images/checkbox-filled-black.svg';

const ToDo = (props) => {
    // Tracks if ToDo is checked or not
    const [checked, setChecked] = useState(false);
    let image;

    // Update image and alt text based on checked state
    if(checked){
        image = {
            src: checkboxFilled,
            alt: 'Checkbox Checked'
        }
    }else{
        image = {
            src: checkbox,
            alt: 'Checkbox'
        }
    }

    // Update checked state and pass state to parent component
    const toggleChecked = () => {
        if(checked){
            setChecked(false);
            props.removeChecked(props.id);
        }else{
            setChecked(true);
            props.addChecked(props.id);
        }
    }

    if(props.isComplete === false){
        return (
            <div className="to-do">
                <span className="to-do__title">{props.title}</span>
                <img className="to-do__checkbox" src={image.src} alt={image.alt} onClick={toggleChecked}/>
            </div>
        )
    }else{
        return (
            <div className="to-do">
                <span className="to-do__title">{props.title}</span>
            </div>
        )
    }
    
}

export default ToDo;
