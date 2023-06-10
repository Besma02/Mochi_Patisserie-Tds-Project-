import React from 'react'
import image_9 from './../../assets/images/img_9.jpg'
import livraison from './../../assets/images/livraison.png'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'


const ServiceBody = () => {
    const navigate=useNavigate()
  return (
    <div className='bodyservice'>
        <div className='container'>
        <div className='row' >
        <div className='col-sm-12 col-md-6 col-lg-6'>
            <div className='entete'>
            <motion.h2 inital={{y:400}} animate={{y:10}} transition={{delay:1.5,type:"spring",stifness:"120"}}>Le printemts est enfin la! </motion.h2>
            <motion.p inital={{y:400}} animate={{y:10}} transition={{delay:1.5,type:"spring",stifness:"120"}}>Mochi patisserie s’occupe de vous.</motion.p>
            <motion.button  className="entete-btn" onClick={()=>navigate('/ProductList')} animate={{scale:1.1}} transition={{delay:1.5,type:"spring",stifness:"120"}}>voir nos mochi</motion.button>
            </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6'>
                <motion.img src={image_9} alt="mochi"  style={{width:"70%",height:"90%",marginLeft:"20%"}}  whileHover={{ 
              scale: 1.07, 
              textShadow: "0px 0px 8px rgb(0,0,25)",
              boxShadow: "0px 0px 8px rgb(0,0,25)",
            }}/>
            </div>
            </div>

            <div className='row' style={{marginBottom:0}} >
        <div className='col-sm-12 col-md-6 col-lg-6'>
           
            <motion.img src={livraison} alt="mochi" className='livrImg' style={{maxWidth:"800px",height:"400px",marginLeft:"5%"}} whileHover={{ 
              scale: 1.1, 
             
            }}/>
             </div>
             
            <div className='col-sm-12 col-md-6 col-lg-6'>
            <div className='main'>
            <motion.h2 inital={{y:400}} animate={{y:-10}} transition={{delay:1.5,type:"spring",stifness:"120"}}>LIVRAISON ALIMENTAIRE </motion.h2>
            <motion.p inital={{x:400}} animate={{x:-10}} transition={{delay:1.5,type:"spring",stifness:"120"}}>Une grande variété de produits professionnels, ultra-frais livrés directement chez vous. Vous bénéficierez également d'un service client dédié et de prix adaptés </motion.p>
            </div>
              
            </div>
            </div>

            <div className='row' style={{backgroundColor:"#D4A3DB",marginTop:"-10%"}}  >
            
             <div className='col-sm-12 col-md-6 col-lg-6 '  >
             
            <motion.h2 inital={{y:400}} animate={{y:20}} transition={{delay:1.5,type:"spring",stifness:"120"}} style={{marginBottom: "0",fontSize:"3.2em",color: "#ffff",lineHeight:"3.4rem",height:"150px",textAlign:"left"}} >
            HYGIÈNE ALIMENTAIRE </motion.h2>
           
           

             </div>
             
            <div className='col-sm-12 col-md-6 col-lg-6' style={{backgroundColor:"#F1DFF4"}}>
            <div className='main2'>
           
            <motion.p inital={{x:300}} animate={{x:10}} transition={{delay:1.5,type:"spring",stifness:"120"}}>Nous devions garantir à nos clientèle  une sécurité sanitaire maximale. En plus d’assurer la bonne santé à nos consommateurs, le fait d’adopter une hygiène irréprochable participe à la renommée de notre Patisserie </motion.p>
            </div>
              
            </div>
            </div>
    <div className='container' style={{marginBottom:"0"}}>
            <div className='row'  >
                <motion.h1 inital={{y:400}} animate={{y:-20}} transition={{delay:1.5,type:"spring",stifness:"120"}} style={{ fontSize:"3.2em", color: "#583278",lineHeight: "3.6rem",margin: "40px 10px"}}>
  
   
   CONTACTEZ-NOUS ET NOUS NOUS OCCUPONS DE TOUT</motion.h1>

             <motion.div className='col-sm-12 col-md-6 col-lg-6' inital={{y:400}} animate={{y:-20}} transition={{delay:1.5,type:"spring",stifness:"120"}}>
          
             <div className='main3' style={{backgroundColor:"#D4A3DB",padding:"20px",marginLeft:"20px",width:"100%"}}>
                <h2>
                Vous pouvez passer votre commande 
                24h/24 sur notre site internet 
                </h2>
                <div style={{backgroundColor:"#ffff",padding:"20px",width:"90%"}} >
             <h3  style={{fontWeight:'bold'}}> 3. Manutention simplifiée</h3>
             <p> Les livreurs déchargent votre commande directement 
                à votre adresse de livraison. 
                Vous pouvez vous concentrer sur ce qui compte le plus
                pour vous !
                </p>
                <h3 style={{fontWeight:'bold'}}>4. Respect de la chaîne du froid </h3>
                <p>Nos camions sont adaptés pour transporter l’ensemble 
                de vos produits, 
                pour vous assurer des produits qui restent 100% frais 
                dans leur emballage 
                et qui respectent toutes les normes en vigueur.
             </p>
             </div>
            </div>
             </motion.div>
             
            <motion.div className='col-sm-12 col-md-6 col-lg-6'style={{width:"50%",paddingTop:"10%"}} inital={{y:400}} animate={{y:-20}} transition={{delay:1.5,type:"spring",stifness:"120"}}>
            
            <h2 style={{marginTop: "0",fontSize:"6.2em",color: "#C641A6",lineHeight:"5.4rem",textAlign:"left",marginLeft:"10%",}} className='process' >
            Process de commande
            </h2>
            </motion.div>
              
            </div>
            </div>
        </div>

    </div>
  )
}

export default ServiceBody