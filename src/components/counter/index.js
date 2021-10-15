import { useState } from "react"

const Counter = () => {
    const  [counterValue, setCounterValue] = useState(0)
  
    const increment = () => {
        setCounterValue(counterValue + 1)
    }

    return (
        <div>
            <div>{counterValue}</div>
            <div>
                <button onClick={() => setCounterValue(counterValue - 1)}>-</button>
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default Counter