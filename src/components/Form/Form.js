import {useState} from 'react'

import './Form.css'

const Form = (props) => {
    const [inputValue, setInputValue] = useState('')

    class ToDo{
        constructor(title, datetime){
            this.key = this.keyGen()
            this.title = title
            this.datetime = datetime
        }

        keyGen(){
            // Math.random should be unique because of its seeding algorithm.
            // Convert it to base 36 (numbers + letters), and grab the first 9 characters after the decimal.
            return Math.random().toString(36).substr(2, 9);
        }
    }

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value)
    }

    const addToDo = (event) => {
        event.preventDefault()

        const newToDo = new ToDo(inputValue, new Date())

        props.submitHandler(newToDo)

        setInputValue('')
    }

    return (
        <form className="to-do-form" onSubmit={addToDo}>
            <input type="text" placeholder="What do you need to do?" value={inputValue} onChange={inputChangeHandler}/>
            <button type="submit">Add To-Do</button>
        </form>
    )
}

export default Form
