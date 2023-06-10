import React,{useState} from 'react'
import './SignIn.css'
import{useNavigate} from 'react-router-dom'
import { FormControl, FormLabel,VStack  ,Button,Input} from '@chakra-ui/react'
import { auth } from '../../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {Link} from 'react-router-dom'


export const Login = () => {
    const navigate=useNavigate()
    const[email,setEmail]=useState('')
   const[password,setPassword]=useState('')
   const[error,setError]=useState('')
   const[successMsg,setSuccessMsg]=useState('')
   const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
        await signInWithEmailAndPassword(auth,email,password)
       
        setSuccessMsg('Login réussie')
        
        setEmail('')
        setPassword('')
        setError('')
        setTimeout(()=>{
            setSuccessMsg('')
            navigate('/')
    
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
                <FormLabel>Email:</FormLabel>
                    <Input type="email" required  bg="white" value={email} onChange={e=>setEmail(e.target.value)}/>
            </FormControl>
            <FormControl>
                <FormLabel>password:</FormLabel>
                    <Input type="password" required  bg="white" value={password} onChange={e=>setPassword(e.target.value)}/>
            </FormControl>
            <div>
                <span>Vous avez déjà un compte? SignIn
                <Link to="/SignIn"> ici </Link></span>
                <Button type="submit">Login</Button>
            </div>

        </VStack>
        {error && <div className="error-msg">{error}</div>}
    </div>
  )
}
