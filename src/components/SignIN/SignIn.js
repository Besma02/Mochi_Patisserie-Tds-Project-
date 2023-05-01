import{useNavigate} from 'react-router-dom'
import './SignIn.css'
import React, { useState } from 'react'
import { FormControl, FormLabel,VStack  ,Button,Input} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import { auth,db } from '../../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import{collection,addDoc} from "firebase/firestore"
const userRef=collection(db,'users')


export const SignIn = () => {
    const navigate=useNavigate()
   const[name,setName]=useState('')
   const[email,setEmail]=useState('')
   const[password,setPassword]=useState('')
   const[error,setError]=useState('')
   const[successMsg,setSuccessMsg]=useState('')
   const handleSubmit=async(e)=>{
    e.preventDefault()
   try{
    await createUserWithEmailAndPassword(auth,email,password)
    addDoc(userRef,{name,email,password})
    setSuccessMsg('signIn réussie')
    setName('')
    setEmail('')
    setPassword('')
    setError('')
    setTimeout(()=>{
        setSuccessMsg('')
        navigate('/Login')

    },3000)
   

   }
   catch(err){
    setError(err.message)

   }
    

   }
  return (
    <div>
        {successMsg && <div className="success-msg">{successMsg}</div>}
        
        <VStack  as="form" onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel>Name:</FormLabel>
                    <Input type="text" required bg="white" value={name} onChange={e=>setName(e.target.value)}/>
            </FormControl>
            <FormControl>
                <FormLabel>Email:</FormLabel>
                    <Input type="email" required bg="white"  value={email} onChange={e=>setEmail(e.target.value)}/>
            </FormControl>
            <FormControl>
                <FormLabel>password:</FormLabel>
                    <Input type="password" required bg="white"  value={password} onChange={e=>setPassword(e.target.value)}/>
            </FormControl>
            <div>
                <span>Vous avez déjà un compte? Login
                <Link to="/Login" > ici </Link></span>
                <Button type="submit">SignIn</Button>
            </div>

        </VStack>
        {error && <div className="error-msg">{error}</div>}
        
    </div>
  )
}
