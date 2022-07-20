import axios from 'axios';
import React from 'react'
import {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Header from './Header/Header';
import './SearchPage.css';


export default function SearchPage() {
    const [query , setQuery] = useState("");
    const [missing , setMissing] = useState(null);
    useEffect(()=>{
      axios.get('https://62d660a551e6e8f06f0807a2.mockapi.io/MissingDB')
          .then((res)=>{
           console.log(res.data);
           setMissing(res.data)
          }).catch((err)=>{
              console.log(err)
          })
      },[]);
     
    return (
      <div>
        <Header title="What have you lost?" image="https://i.pinimg.com/564x/3d/d5/54/3dd5541aca6d2762d0f35f14df1f48fb.jpg" missing1="Wallet" missing2="Apple Watch" missing3="Charger" missing4="Cardit card" missing5="AirPods" missing6="Key"  missing7="Phone" />
        <br/><br/>
        {/* <input style={mystyle} placeholder=' What have you lost ?' onChange={(e) =>{setQuery(e.target.value)}}></input><br/><br/><br/> */}
        
        
        <input type="text" name="name" class="question" id="nme" required autocomplete="off" onChange={(e) =>{setQuery(e.target.value)}} />
        <label for="nme"><span>What have you lost ?</span></label>
        <br/><br/>

        
        
        
        
        
        
        
        
        <div className='cardsStyle'>
            <Row>
        {missing && missing.filter(missing => {
          if (query === ''){
            // return missing
            console.log(missing)
          } else if (missing.types.toLowerCase().includes(query.toLowerCase())){
             return missing
            console.log(missing)
          }
         
        })
        .map((e)=>(
          e.state === "no" ?
            <Card style={{ width:'18rem'}}>
            <Card.Img variant="top" src={e.image} />
            <Card.Body>
                <Card.Title>{e.types}</Card.Title>
                <Card.Text>
                {e.description}
                </Card.Text>
                <Card.Text>
                Date:{e.date}
                </Card.Text>
                <Card.Text>
                {e.state == "no" ? <p style={{color:"rgb(11,45,101)"}}>still missing</p> : <p style={{color:"red"}}>found it</p>}
                </Card.Text>
                <Button style={{backgroundColor:"#0e085dc5"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg> <a className='styleLink' href="https://api.whatsapp.com/send?phone=503228007&text=Hello this is the starting message">Call me!</a></Button>
            </Card.Body>     
            </Card>
           
          :" "
        ))}</Row> </div>
  
      </div>
    )
  }
  