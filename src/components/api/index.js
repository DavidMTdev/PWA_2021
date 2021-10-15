import { useEffect, useState } from "react"
import axios from 'axios'

const HarryPotter = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('http://hp-api.herokuapp.com/api/characters')
        .then(function (response) {
        // handle success
        const listItem = response.data.map((item) => item)
        setItems(listItem)
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
    }, [])

    const listItems = items.map((item, index) => 
    <div key={index}>
        <p>{item.name}</p>
        <img src={item.image} alt={item.name}></img>
    </div>
    )
    
    return(
        <div>
            {listItems}
        </div>
    )
}

export default HarryPotter
