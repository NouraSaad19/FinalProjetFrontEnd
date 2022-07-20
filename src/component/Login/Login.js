import React, { useState , useEffect} from 'react'
import axios from 'axios';
import './Login.css';
import {useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();
    const navigate= useNavigate();
    


    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
      }, []);

      const handleLogout = () => {
        setUser({});
        setUsername("");
        setPassword("");
        localStorage.clear();
        navigate("/HoomPage")
        
      };

      const handleSubmit = async e => {
        e.preventDefault();
        const user = { username, password };
  
        const response = await axios.post(`http://127.0.0.1:8000/login_user/`, user);
    
        setUser(response.data);
  
        localStorage.setItem("user", JSON.stringify(response.data));
        alert(response.data.msg)
        navigate("/HoomPage")
      };
    
      if (user) {
        return (
        <div className="container1">
		<div className="contact-box">
			<div className="left"></div>
			<div className="right">
				<h2>{user.username}You are logged in</h2>
                <br/><br/>
				<button className="btn" type="submit" onClick={handleLogout}>LOGOUT</button>         
			</div>
		</div>
	</div>
        );
      }
      return (
        <div className="container1">
		<div className="contact-box">
			<div className="left"></div>
			<div className="right">
                <form onSubmit={handleSubmit}>
				<h2>Login</h2>
                <input 
                type="text"
                value={username}
                placeholder="Enter a username"
                className="field"
                onChange={({ target }) => setUsername(target.value)}
                />
                <input
                type="password"
                value={password}
                placeholder="Enter a password"
                className="field"
                onChange={({ target }) => setPassword(target.value)}
                />
				<button className="btn" type="submit">LOGIN</button>
                </form>
			</div>
		</div>
	</div>
    
      );
    }



















//   return(

//            <div className="container1">
// 		<div className="contact-box">
// 			<div className="left"></div>
// 			<div className="right">
//                 {/* <form onSubmit={handleSubmit}> */}
//                 <form >
// 				<h2>Login</h2>
//                 <input 
//                 type="text"
//                 // value={username}
//                 placeholder="Enter a username"
//                 className="field"
//                 // onChange={({ target }) => setUsername(target.value)}
//                 />
//                 <input
//                 type="password"
//                 // value={password}
//                 placeholder="Enter a password"
//                 className="field"
//                 // onChange={({ target }) => setPassword(target.value)}
//                 />
// 				<button className="btn" type="submit">LOGIN</button>
//                 </form>
// 			</div>
// 		</div>
// 	</div>
    

//   );
// }