import img_2 from './../../assets/images/img_2.jpg'
import {motion} from "framer-motion"
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  VStack,
  HStack,
 
  Textarea,
  Checkbox,
  Box,
 
  
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";

import * as yup from "yup";

import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import {  useNavigate } from 'react-router-dom';

const validateSchema = yup.object().shape({
  email: yup
    .string()
    .email("email doit avoire la forme de xxxxxxxxxx")
    .required("email est obligatoire"),
  username: yup.string().required("prenom est obligatoire"),
  lastname: yup.string().required("nom est obligatoire"),
  Téléphone:yup.number().typeError('vuillez entrer a valid numéro de téléphone').required("le téléphone est obligatoire"),
  gcu:yup.boolean().oneOf([true],"veuillez accepter les conditions d'utilisation")

});

export const Contact = () => {
  
 const navigate=useNavigate()
  
  
  return (
    
      <HStack>
       <Formik
      initialValues={{
        email: "",
        username: "",
        lastname: "",
        Téléphone:"",
        message:"",
        gcu:false
      }}
      onSubmit={(values) => {
        console.log(values);
        const contactRef=collection(db,'contact')
        addDoc(contactRef,{values})
        navigate('/')
      }}
      validationSchema={validateSchema}
    >
      <Form style={{backgroundColor:"white",border:"1px solid #cccc",marginLeft:"10%"}} method='post' action='/Contact'  >
        <VStack  bg='white' >
          
         
       
            <Field name="username">
              {({ field, form }) => (
                <FormControl id="username" isInvalid={form.errors.username} isRequired>
                  <FormLabel>Prenom</FormLabel>
                  <Input type="text" {...field} />
                  <FormHelperText>{form.errors.username}</FormHelperText>
                </FormControl>
              )}
            </Field>
            <Field name="lastname">
              {({ field, form }) => (
                <FormControl id="lastname" isInvalid={form.errors.lastname} isRequired>
                  <FormLabel>Nom</FormLabel>
                  <Input type="text" {...field}  />
                  <FormHelperText>{form.errors.lastname}</FormHelperText>
                </FormControl>
              )}
            </Field>
         
          <Field name="email">
            {({ field, form }) => (
              <FormControl id="email" isInvalid={form.errors.email} isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="text" {...field}  />
                <FormHelperText>{form.errors.email}</FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name="Téléphone" >
            {({ field, form }) => (
              <FormControl id="telephone" isInvalid={form.errors.Téléphone} isRequired>
                <FormLabel>Téléphone</FormLabel>
                <Input type="number" {...field}  />
                <FormHelperText color='red'>{form.errors.Téléphone}</FormHelperText>
              </FormControl>
            )}
          </Field>
      
          <Field name="message">
            {({ field, form }) => (
              <FormControl id="message" isInvalid={form.errors.message}>
                <FormLabel>Message</FormLabel>
                <Textarea type="text" {...field} />
                <FormHelperText color='red'>{form.errors.message}</FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name="gcu">
            {({ field, form }) => (
              <FormControl id="gcu" isInvalid={form.errors.gcu} display="flex" >
                <Checkbox type="checkbox" {...field} marginRight="10px " />
                <FormLabel marginTop='5px'>j'accepte la politique de confidentialité</FormLabel>
                <FormHelperText color='red'>{form.errors.gcu}</FormHelperText>
              </FormControl>
            )}
          </Field>
        </VStack>
        <Button  type="submit" marginTop="20px" >envoyer</Button>
       
        
      </Form>
    </Formik>
    

    <Box fontSize="14px"  p="20px" margin="auto"  >
      <HStack  marginLeft="25%" >
       <motion.h3 style={{fontWeight:"bold"}} inital={{y:400}} animate={{y:-10}} transition={{delay:1.5,type:"spring",stifness:"120"}}>Email:</motion.h3>
      <motion.Text inital={{y:400}} animate={{y:-10}} transition={{delay:1.5,type:"spring",stifness:"120"}} >MochiPatisserie@gmail.com</motion.Text>
      </HStack>
      <HStack  marginLeft="25%">
     <motion.h3 style={{fontWeight:"bold"}} inital={{y:400}} animate={{y:-10}} transition={{delay:1.5,type:"spring",stifness:"120"}}>Tél:</motion.h3> 
      <motion.Text  inital={{y:400}} animate={{y:-10}} transition={{delay:1.5,type:"spring",stifness:"120"}}>+216 99652348</motion.Text>
      </HStack>
      <HStack marginLeft="25%">
      <motion.h3 style={{fontWeight:"bold"}} inital={{y:400}} animate={{y:-10}} transition={{delay:1.5,type:"spring",stifness:"120"}}>Adresse:</motion.h3>
      <motion.Text  inital={{y:400}} animate={{y:-10}} transition={{delay:1.5,type:"spring",stifness:"120"}}>Cité ennasr 2 Tunis</motion.Text>
      </HStack>
      <motion.img src={img_2} alt="image" style={{width:"70%",height:"70%",margin:"20px auto"}} whileHover={{ 
              scale: 1.1, 
            
            }}/>
    </Box>
    </HStack>
    
  
  );
  
}
export const createAction = async ({ request }) => {
  const data = await request.formData()

  const task = {
    username: data.get('username'),
    lastname: data.get('lastname'),
    email: data.get('email'),
    Téléphone: data.get('Téléphone'),
    Message: data.get('message'),
    gcu: data.get('gcu') === ''
  }
 
 
  
 
}
