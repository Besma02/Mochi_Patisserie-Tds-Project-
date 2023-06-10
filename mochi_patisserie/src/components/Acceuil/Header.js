import React from 'react'
import './Acceuil.css'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'
export const Header = () => {
  const navigate=useNavigate()
  
  return (
    <header>
    <div className='head'>
      <div className='row'>
        <div className='col-sm-12 col-md-6 col-lg-12' >
            <motion.h1 inital={{y:400}} animate={{y:10}} transition={{delay:1.5,type:"spring",stifness:"120"}} >Mochi</motion.h1>
            <motion.h2 inital={{y:-300}} animate={{y:-10}}transition={{delay:1.5,type:"spring",stifness:"120"}}>la saveur de la bouche</motion.h2>
            <motion.p inital={{opacity:0}} animate={{opacity:1}}>Cuisine japonaise, pâtisseries</motion.p>
            <motion.button onClick={()=>navigate('/ProductList')} animate={{scale:1.3}} transition={{delay:1.5,type:"spring",stifness:"120"}}>commandez</motion.button>
        </div>
        </div>
    </div>
    </header>
  )
}

