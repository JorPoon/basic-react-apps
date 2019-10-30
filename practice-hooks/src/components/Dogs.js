import React, {useState, useEffect} from 'react';
import axios from "axios";


const Dogs = props => {
    const [dogs, setDogs] = useState([])

    const getDogs = () => {
        axios
        .get('https://dog.ceo/api/breeds/list/all')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    useEffect( () => {
        const fetchData = async () => {
            const result = await axios(
              'https://dog.ceo/api/breeds/list/all',
            );
                setDogs(result.data.message.bulldog)
                
        }
        
        fetchData();
        console.log(dogs)
        console.log(result.data.mesage.bulldog)
    },[])

    return (
        <h1>Dogs</h1>
    )
}

export default Dogs;