import React from 'react'
import'./Footer.css'
import { PhoneIcon,EmailIcon,SpinnerIcon } from '@chakra-ui/icons'
import { Divider } from "@chakra-ui/react"

export const Footer = () => {
  return (
    <footer className='container-fluid'>
      <div className='row'>
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <EmailIcon w={8} h={8} color="white.500" marginLeft="10%"/>
            <h4>MochiPatisserie@gmail.com</h4>
            <PhoneIcon w={8} h={8} color="white.500" marginLeft="10%"/>
           <h4>+216 99652348</h4>
           <SpinnerIcon w={8} h={8} color="white.500" marginLeft="10%"/>
           
            <h4>adress:Cité ennasr 2 Tunis</h4>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-4'>
        <h1></h1>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-4'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6384.538248675454!2d10.145356723682466!3d36.85997655395034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scite%20ennasr%202!5e0!3m2!1sfr!2stn!4v1681047221726!5m2!1sfr!2stn"
         width="400" height="250" style={{border:"4px solid", allowfullscreen:"", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
        </div>
      </div>
      <Divider color="white" w="30%" marginLeft="35%"/>
        <p>copyright@2023 MochiPatisserie</p>
       
    </footer>
  )
}
