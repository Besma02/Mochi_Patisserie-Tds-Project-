import React from 'react'
import './Services.css'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'

const ServiceHead = () => {
    const navigate=useNavigate()
  return (
    <header className='servicehead'  >
    <div className='head'>
      <div className='row'>
        <div className='col-sm-12 col-md-6 col-lg-12' >
            <motion.h1  inital={{y:400}} animate={{y:10}} transition={{delay:1.5,type:"spring",stifness:"120"}} >Voulez-vous recevoir  votre mochi à la maision?</motion.h1>
             <motion.button  onClick={()=>navigate('/ProductList')} animate={{scale:1.3}} transition={{delay:1.5,type:"spring",stifness:"120"}}>commandez maitenant!</motion.button>
        </div>
        </div>
    </div>
    </header>
  )
}

export default ServiceHead