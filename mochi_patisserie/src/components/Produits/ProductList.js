
import React, { useEffect, useState } from 'react'
import { auth, db } from "../../config/firebase"
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { Card, CardBody, CardFooter, CardHeader, Heading ,Text,Button, SimpleGrid} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../feature/CartSlice'
import { useToast } from '@chakra-ui/react'
import { UnlockIcon } from "@chakra-ui/icons"
import { useNavigate } from 'react-router-dom'
import {motion} from "framer-motion"
import { onAuthStateChanged } from 'firebase/auth'



export const ProductList = () => {
  
  // gettin current user uid
  function GetUserUid(){
   const [uid, setUid]=useState(null);
   useEffect(()=>{
       onAuthStateChanged(auth,user=>{
           if(user){
               setUid(user.uid);
           }
       })
   },[])
   return uid;
}
const uid = GetUserUid();
  
  const ProductsCollectionRef=collection(db,'Produits')
  const[productList,setProductList]=useState([])
   const getProductList=async()=>{
   try{
    const data= await getDocs(ProductsCollectionRef)
    const filtreddata=data.docs.map(doc=>({...doc.data(),id:doc.id}))
    setProductList(filtreddata)
   }
   catch(err){
    console.error(err.message)
}
  
  }
  
  useEffect(()=>{
    
    getProductList()

  },[])
  const toast=useToast()
  const navigate=useNavigate()

  const dispatch=useDispatch()
  let Product
  const handleaddTocart=(product)=>{
    dispatch(addToCart(product))
    const userCartRef=collection(db,'cart')
      
   addDoc(userCartRef,{uid,product})
    toast({
      title: (`${product.title}`),
      description: "ajout à la carte réussie",
      duration: 1000,
      isClosable: true,
      position: 'top',
      status: 'info',
     icon: <UnlockIcon />,
    })
  
     navigate('/Cart')
  }


 
  return (
    <div>
     
   <motion.h1 style={{textAlign:"center",color:"#583278",margin:"20px 0px",fontSize:"2.4em",fontWeight:"bold"}} inital={{x:400}} animate={{x:-10}} transition={{delay:1.5,type:"spring",stifness:"120"}}>Products List</motion.h1> 
   
   
    <SimpleGrid minChildWidth={200} gap="10px" bg="gray.50" p="20px" >
    {productList.map(product=>(
         
            <motion.div whileHover={{ 
              scale: 1.1, 
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}>
            <Card bg="white" p="5px"  marginLeft="10px" borderTop="8px" borderColor="#583278" >
                <CardHeader>
                <Heading as="h3" fontSize="1.2em" marginBottom="20px">{product.title}</Heading>
                 <img src={product.url}/>
                </CardHeader>
                <CardBody>
                <Text>{product.description}</Text>
                </CardBody>
                <CardFooter>
                <Text >${product.price}</Text>
                <Button marginTop="30px" onClick={()=>handleaddTocart(product)}>ajouter à la cart</Button>
                
                </CardFooter>

            </Card>
            </motion.div>
            
        ))}
       
        </SimpleGrid>
        
     </div>
  )
}
