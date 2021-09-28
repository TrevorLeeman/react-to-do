import {useState} from 'react'

import './ToDo.css'

import checkbox from '../../images/checkbox-black.svg'
import checkboxFilled from '../../images/checkbox-filled-black.svg'

const ToDo = (props) => {
    const [checked, setChecked] = useState(false)
    let image;

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

    const toggleChecked = () => {
        if(checked){
            setChecked(false)
            props.removeChecked();
        }else{
            setChecked(true)
            props.addChecked();
        }
    }

    return (
        <div className="to-do">
            <span className="to-do__title">{props.title}</span>
            <img className="to-do__checkbox" src={image.src} alt={image.alt} onClick={toggleChecked}/>
        </div>
    )
}

export default ToDo
