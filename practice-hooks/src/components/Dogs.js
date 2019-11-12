import React, {useState, useEffect} from 'react';
import axios from "axios";


const Dogs = props => {
    const [dogs, setDogs] = useState([])
    const [breed, setBreed] = useState("mix")

    const getDogs = async () => {
        await axios
        .get('https://dog.ceo/api/breeds/list/all')
        .then(res => {
            setDogs(res.data)
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    useEffect( () => {
        getDogs()
        
    },[])
    console.log(dogs)
    return (
        <h1>Dogs</h1>
        //data for each to pass down for each dog
    )
}

export default Dogs;