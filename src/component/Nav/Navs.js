import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import key from '../../images/key.png'
import '../Nav/Navs.css'
export default function Navs() {
  
  return (
    <div>
         <Navbar  expand="lg">
        <Navbar.Brand href="/"><img className='logo' src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  as={NavLink} to="/">HOME</Nav.Link>
            <Nav.Link as={NavLink} to="Missing">MISSINGS</Nav.Link>
            <Nav.Link as={NavLink} to="SearchPage">SEARCH</Nav.Link>
            <Nav.Link as={NavLink} to="AddMissing">AddMissing</Nav.Link>
          </Nav>
          <Nav >
          <Nav.Link as={NavLink} to="login"><img className='iconLogin' src={key} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  )
}
