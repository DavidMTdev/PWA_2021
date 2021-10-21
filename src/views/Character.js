import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Character = props => {
    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://gateway.marvel.com/v1/public/characters/${id}`,
            params: {
                ts: 1,
                apikey: "61c8a7fcda8ea4460ae3153ca1634e06",
                hash: "18095a47f8255dd67eda41da8f63d7e2"
            }
        }).then(function (response) {
            setCharacter(response.data.data.results[0])
        }).catch(function (error) {
            console.log(error);
        })
    }, [id])

    return (
        <div>
            <h1>ID: {character.id}</h1>
            <p>Name: {character.name}</p>
            <p>Description: {character.description}</p>

        </div>
    );
};

export default Character;