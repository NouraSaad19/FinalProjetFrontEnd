import React, { useState } from 'react'
import axios from 'axios';
import Header from '../Header/Header'
import '../AddMissing/AddMissing.css'
import {useNavigate} from "react-router-dom"

export default function AddMissing() {
    const [image , setImage] = useState("");
    const [types , setTypes] = useState("");
    const [description , setDescription] = useState("");
    const [date , setDate] = useState("");
    const [phone , setPhone] = useState("");
    const [state , setState] = useState();
    const navigate= useNavigate();
    

    const postData = () =>{
        axios.post('https://62d660a551e6e8f06f0807a2.mockapi.io/MissingDB',{image,types,description,date,phone,state})
        .then(res => {console.log(res)
            navigate("/Missing")
        
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
  return (
    <div>
        <Header title="Help the one who loses something to find it faster.." image="https://i.pinimg.com/564x/28/04/3b/28043b3fbeb2e10a840b9efa99d8b291.jpg" />
        <br/><br/><br/>
        <div className='continer'>
            <h1 style={{color:"rgb(11,45,101)"}}>Information about missing item</h1><br/>
        <input type="text" name="name" class="question" id="nme" required autocomplete="off" onChange={(e) =>{setTypes(e.target.value)}}></input>
        <label for="nme"><span>What have you found ?</span></label><br/>
        <input type="text" name="name" class="question" id="nme" required autocomplete="off" onChange={(e) =>{setImage(e.target.value)}}></input>
        <label for="nme"><span>Add the lost item image..</span></label><br/>
        <input type="text" name="name" class="question" id="nme" required autocomplete="off" onChange={(e) =>{setDescription(e.target.value)}}></input>
        <label for="nme"><span>Where did you find the lost item ?</span></label><br/>
        <input type="text" name="name" class="question" id="nme" required autocomplete="off" onChange={(e) =>{setDate(e.target.value)}}></input>
        <label for="nme"><span>What is the date you found it?</span></label><br/>
        <input type="text" name="name" class="question" id="nme" required autocomplete="off" onChange={(e) =>{setPhone(e.target.value)}}></input>
        <label for="nme"><span>What is your phone number ?</span></label><br/>
        <input type="text" name="name" class="question" id="nme" required autocomplete="off" onChange={(e) =>{setState(e.target.value)}}></input>
        <label for="nme"><span>have you found the owner of the lost item ?</span></label><br/>
        <button className='buttonStyle' onClick={postData}>add</button>
        </div>
    </div>
  )
}
