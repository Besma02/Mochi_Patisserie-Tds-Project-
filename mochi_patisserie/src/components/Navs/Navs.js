
import React from 'react'
import{Container,Navbar,Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navs.css'
export const Navs = () => {
  return (
    <div>
      <Navbar  expand="lg">
      <Container className='menu' >
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle   />
        <Navbar.Collapse id="basic-navbar-nav"  >
          <Nav className="navbar">
            <NavLink  to="/"  className="link">Acceuil</NavLink>
            <NavLink to="/Produits" className="link">Produits</NavLink>
            <NavLink to="/Services" className="link">Services</NavLink>
            <NavLink to="/Contact" className="link">Contact</NavLink>
            <NavLink to="/SignIn" className="signin">SignIn</NavLink>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

