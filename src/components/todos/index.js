import { useState } from "react"
import { uuid } from 'uuidv4';

const Todos = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')
    
    const addItem = () => {
        //! moin perf
        // todos.push(inputValue)
        // setTodos([...todos])
        setTodos([...todos, {id: uuid(), label: inputValue}])
        setInputValue('')
    }

    const removeItem = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    const removeLastItem = () => {
        todos.pop()
        setTodos([...todos])
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const listItems = todos.map((todo) => 
    <li key={todo.id}>{todo.label}<button onClick={() => removeItem(todo.id)}>Remove</button></li>
    )

    return(
        <div>
            <input value={inputValue} onChange={handleChange}></input>
            <button onClick={addItem}>Add</button>
            <button onClick={removeLastItem}>Remove Last</button>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default Todos