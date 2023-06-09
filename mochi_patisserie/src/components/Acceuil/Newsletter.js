import { Input,Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import {motion} from "framer-motion"
import React,{useState} from 'react'
import { db } from "../../config/firebase"
import{collection,addDoc} from "firebase/firestore"
import { FormLabel } from "react-bootstrap"
const userRef=collection(db,'users')

export const Newsletter = () => {
    const [email, setEmail] = useState('')
    const handleSubmit=async()=>{
        try{
            addDoc(userRef,{email})
        }
        catch(err){
            console.error(err)
        }
    }
  return (
    <motion.div inital={{y:'100vh'}} animate={{y:20}} transition={{delay:0.5,type:"spring"}} className="container-fluid "  style={{backgroundColor:"#f4f1f3"}} >
         <div className="row">
         <div className="col-sm-12 col-md-6 " >
            <h2 style={{margin:"20px 40px ",fontSize:"32px",fontWeight:700}}>Pour vos informations</h2>
           <Link to='/Contact'> <button className="btnContact" >Contactez-nous</button></Link>
            </div>

         <div className="col-sm-12 col-md-6 " >  
        <h3 style={{marginTop:"20px ",textAlign:"center",fontSize:"20px"}}>S'inscrire à notre Newsletter</h3>
        <form onSubmit={handleSubmit}>
            <FormLabel>Email : </FormLabel>
            <Input w="50%" bg="white" marginRight="10px"  type="email" onChange={e=>setEmail(e.target.value)}/>
            <motion.button type="submit" whileHover={{ 
            scale: 1.1, 
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}>submit</motion.button>
        </form>
        </div>
       
        </div>
      </motion.div>
  )
}
