
import React, { useEffect, useState } from 'react'
import { db } from "../../config/firebase"
import { collection, getDocs } from 'firebase/firestore'
import { Card, CardBody, CardFooter, CardHeader, Heading ,Text,Button, SimpleGrid} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../feature/CartSlice'
import { useToast } from '@chakra-ui/react'
import { UnlockIcon } from "@chakra-ui/icons"
import { useNavigate } from 'react-router-dom'


export const ProductList = () => {
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
  const handleaddTocart=(product)=>{
    dispatch(addToCart(product))
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
    <h1  style={{textAlign:"center",color:"#583278",margin:"20px 0px",fontSize:"2.4em",fontWeight:"bold"}}>Products List</h1>
   
   
    <SimpleGrid minChildWidth={200} gap="10px" bg="gray.50" p="20px">
    {productList.map(product=>(
         
        
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
            
            
        ))}
       
        </SimpleGrid>
        
     </div>
  )
}
