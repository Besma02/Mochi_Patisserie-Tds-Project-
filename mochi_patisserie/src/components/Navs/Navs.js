import { useSelector } from 'react-redux'
//import { useEffect,useState } from "react";
import{Container,Navbar,Nav} from 'react-bootstrap'
import { NavLink,Link,useNavigate } from 'react-router-dom'
import './Navs.css'
import logo_mochiPink from './../../assets/logo_mochiPink.png'
import {  signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'
import UserAuth from '../../UserAuth'
//import { collection, doc, getDoc, setDoc } from 'firebase/firestore';



export const Navs = () => {
  const currentUser=UserAuth()

 
  /*
      // getting current user function
      function GetCurrentUser(){
        const [user, setUser]=useState(null);
       
        useEffect(()=>{
            onAuthStateChanged(auth,user=>{
              
                if(user){
                  
                  
                  
                   const docRef = doc(db, "users", 
                
                  'LVA7T2MjksO2BJmYV4zL');
                  
                   getDoc(docRef)
                   .then((doc)=>{
                    
                   setUser(doc.data().name,doc.id)
                   })
                  ;
                }
                else{
                    setUser(null);
                }
            })
        },[])
        return user;
    }

    const user = GetCurrentUser();
    // console.log(user)
    */

  const navigate=useNavigate()
  

  const handleLogout=()=>{
    signOut(auth).then(()=>{
        navigate('/login');
    })
}
  
  const{cartTotalQuantity}=useSelector(state=>state.cart)
  return (
    <div>
      <Navbar  expand="lg">
      <Container className='menu' >
        <Link to='/'><Navbar.Brand ><img src={logo_mochiPink} className="logo_mochiPink" /></Navbar.Brand></Link>
        
        <Navbar.Toggle   />
        <Navbar.Collapse id="basic-navbar-nav"  >
          <Nav className="navbar">
            <NavLink  to="/"  className="link">Acceuil</NavLink>
            <NavLink to="/Produits" className="link">Produits</NavLink>
            <NavLink to="/Services" className="link">Services</NavLink>
            <NavLink to="/Contact" className="link">Contact</NavLink>
            
           
           
            
             <Link to='/Cart'>
              <div className="nav-cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
               
                <span className="cart-quantity">
                  <span>{cartTotalQuantity}</span>
                </span>

                </div>
             </Link>
             
              {currentUser?<>{currentUser?.email}  <div className='btn btn-md' style={{backgroundColor:"#f0899f",marginLeft:"20px",color:"white"}}
                    onClick={handleLogout}>LogOut</div> </>:
            
           <NavLink to="/SignIn" className="signin">SignIn</NavLink>  }
          
         
            
           
             
            
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

