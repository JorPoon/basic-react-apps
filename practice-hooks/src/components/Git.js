import React, {useState, useEffect} from 'react';
import axios from "axios";



const Git = () => {
    const [user, setUser] = useState([])

    const getUser = () => {
        axios.get("https://api.github.com/users/JorPoon")
        .then(res => {
            console.log(res.data)
            setUser(res.data)
        })
    }

    useEffect(() => {
        // axios.get("https://api.github.com/users/JorPoon")
        // .then(res => {
        //     console.log(res.data)
        //     setUser(res.data)
        // })
        getUser()
    }, [])
    return (
        <>
        <h1>Git Card</h1>
        <h2>{user.login}</h2>
        <p>Profile url: 
        <a href={user["html_url"]}>{user["html_url"]}</a>
        </p>
        </>
    )
}

export default Git