import { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from "axios";

const Characters = (props) => {
    const [characters, setCharacters] = useState([])
    const [limit, setLimit] = useState(20)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        axios({
            method: 'GET',
            url: "http://gateway.marvel.com/v1/public/characters",
            params: {
                ts: 1,
                apikey: "61c8a7fcda8ea4460ae3153ca1634e06",
                hash: "18095a47f8255dd67eda41da8f63d7e2",
                limit: limit,
                offset: offset
            }
        }).then(function (response) {
            const listItem = response.data.data.results.map((item) => item)
            setCharacters(listItem)
        }).catch(function (error) {
            console.log(error);
        })

        // axios.get(`${props.url}?ts=1&apikey=${props.apiKey}&hash=${props.hash}&limit=${limit}&offset=${offset}`)
        // .then(function (response) {
        //     const listItem = response.data.data.results.map((item) => item)
        //     setCharacters(listItem)
        // })
        // .catch(function (error) {
        //     console.log(error);
        // })
    }, [offset, limit])

    const listCharacters = characters.map((item, index) => 
        <StyledCharacter key={index}>
            <StyledCharacterName>{item.name}</StyledCharacterName>
        </StyledCharacter>
    )

    const handleChange = (event) => {
        setLimit(event.target.value)
    }

    const back = () => {
        if (offset !== 0) {
            setOffset(offset - limit)
        }
    }

    const next = () => {
        setOffset(offset + limit)
    }

    return(
        <div>
            <StyledTitle>Characters</StyledTitle>
            <StyledGroupButton>
                <input value={limit} onChange={handleChange}></input>
                <button onClick={back}>back</button>
                <button onClick={next}>next</button>
            </StyledGroupButton>
            {listCharacters}
        </div>
    )
}

const StyledTitle = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledGroupButton = styled.div`
    display: flex;
    margin: 10px 20px;
`

const StyledCharacter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    background-color: #ff0000;
    transition: background-color 0.5s ease-in-out;

    &:hover{
        background-color: #c30000;
    }
`

const StyledCharacterName = styled.p`
    margin: 2px 0;
    color: white;
`

export default Characters