import React, {useState, useEffect} from 'react';
import axios from "axios";


const Dogs = props => {
    const [dogs, setDogs] = useState([])

    const getDogs = () => {
        axios
        .get('https://dog.ceo/api/breeds/list/all')
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    useEffect( () => {
        getDogs()
        
    },[])

    return (
        <h1>Dogs</h1>
        //data for each to pass down for each dog
    )
}

export default Dogs;