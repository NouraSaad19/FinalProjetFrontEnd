import React, { useState } from 'react'
import axios from 'axios';


export default function Create() {
    const [image , setImage] = useState("");
    const [types , setTypes] = useState("");
    const [description , setDescription] = useState("");
    const [date , setDate] = useState("");
    const [phone , setPhone] = useState("");
    const [state , setState] = useState();
    

    const postData = () =>{
        axios.post('https://62d660a551e6e8f06f0807a2.mockapi.io/MissingDB',{image,types,description,date,phone,state})
        .then(res => {console.log(res)
        
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
  return (
    <div>
        <input placeholder='setImage' onChange={(e) =>{setImage(e.target.value)}}></input>
        <input placeholder='setTypes' onChange={(e) =>{setTypes(e.target.value)}}></input>
        <input placeholder='setDescription' onChange={(e) =>{setDescription(e.target.value)}}></input>
        <input placeholder='setDate' onChange={(e) =>{setDate(e.target.value)}}></input>
        <input placeholder='setPhone' onChange={(e) =>{setPhone(e.target.value)}}></input>
        <input placeholder='setState' onChange={(e) =>{setState(e.target.value)}}></input>
        <button onClick={postData}>add</button>
    </div>
  )
}
