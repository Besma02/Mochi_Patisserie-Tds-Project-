import { Input,Button } from "@chakra-ui/react"


import React,{useState} from 'react'
import { db } from "../../config/firebase"
import{collection,addDoc} from "firebase/firestore"
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
    <div className="container ">
      
        <h2>S'inscrire à notre Newsletter</h2>
        <form onSubmit={handleSubmit}>
            <Input w="50%" bg="white" marginRight="10px"  type="email" onChange={e=>setEmail(e.target.value)}/>
            <Button type="submit">submit</Button>
        </form>
      </div>
  )
}
