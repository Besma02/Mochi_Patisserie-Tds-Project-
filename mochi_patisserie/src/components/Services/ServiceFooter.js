import React from 'react'
import choix from './../../assets/images/choix.png'
import payement from './../../assets/images/payement.png'
import camion from './../../assets/images/camion.png'
import {motion} from "framer-motion"
const ServiceFooter = () => {
  return (
    < div className='container' style={{marginTop:0}}>
    
    <motion.div className='row' style={{backgroundColor:"#F1DFF4"}} inital={{y:400}} animate={{y:-20}} transition={{delay:1.5,type:"spring",stifness:"120"}} >
    <div className='col-sm-12 col-md-6 col-lg-6'  >
    <motion.h2  style={{fontSize:"5.2em",color: "#C641A6",lineHeight:"5.4rem",paddingLeft:"20%",marginBottom:"20px" }}inital={{y:400}} animate={{y:-20}} transition={{delay:1.5,type:"spring",stifness:"120"}}>Notre service livraison </motion.h2>
    </div>
    <motion.div className='col-sm-12 col-md-6 col-lg-6' style={{fontSize:"14px",padding:"10px",marginTop:0}} inital={{x:300}} animate={{x:-10}} transition={{delay:1.5,type:"spring",stifness:"120"}}>
    <h3 style={{fontWeight:"bold"}}>Etape 1</h3>
      <p>
        Enregistrez-vous
        Remplissez le formulaire dédié en remplissant uniquement
        votre nom, vos coordonnées et votre adresse professionnelle.
        </p>
        <h3 style={{fontWeight:"bold"}}>Etape 2</h3>
        <p>
        Nous vous contactons
        Nous vous rappelons dans les meilleurs délais pour 
        déterminer vos besoins et vérifier votre éligibilité au
        service livraison.
        </p>
        <h3 style={{fontWeight:"bold"}}>Etape 3</h3>
        <p>
        Commencez à commander
        Vous pouvez maintenant passer votre première commande
        de livraison sur ntre site.
        </p>

        </motion.div>
        </motion.div>



    <div className='container' style={{margin:"40px 0 ",textAlign:"center",display:"flex",justifyContent:"center"}}>
            <div className='row'  >
                

             <div className='col-sm-12 col-md-6 col-lg-4' style={{}} >
             <motion.img src={choix} alt="mochi" style={{width:"30%",height:"40%",marginLeft:"30%",marginBottom:"10px"}}  whileHover={{ 
              scale: 1.1, 
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}/>
             <motion.h3 style={{fontWeight:"bold"}} inital={{y:400}} animate={{y:20}} transition={{delay:1.5,type:"spring",stifness:"120"}}>Large choix </motion.h3>
             <motion.p inital={{y:400}} animate={{y:20}} transition={{delay:1.5,type:"spring",stifness:"120"}}>+ de 100 produits à votre disposition</motion.p>

             
            </div>
             
             
            <div className='col-sm-12 col-md-6 col-lg-4'>
            <motion.img src={camion} alt="mochi" style={{width:"40%",height:"40%",marginLeft:"30%",marginBottom:"10px",marginRight:"40px"}}  whileHover={{ 
              scale: 1.1, 
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}/>
            <motion.h3 style={{fontWeight:"bold"}} inital={{y:400}} animate={{y:20}} transition={{delay:1.5,type:"spring",stifness:"120"}} >Livraison rapide </motion.h3>
            <motion.p inital={{y:400}} animate={{y:20}} transition={{delay:1.5,type:"spring",stifness:"120"}}>Dans votre établissement ou retrait en Halles</motion.p>

            </div>
            <div className='col-sm-12 col-md-6 col-lg-4'>
            <motion.img src={payement} alt="mochi" style={{width:"30%",height:"60%",marginLeft:"40%",marginBottom:"0"}}  whileHover={{ 
              scale: 1.1, 
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}/>
            <motion.h3 style={{fontWeight:"bold"}} inital={{y:400}} animate={{y:20}} transition={{delay:1.5,type:"spring",stifness:"120"}}>Paiement pro</motion.h3>
            <motion.p inital={{y:400}} animate={{y:20}} transition={{delay:1.5,type:"spring",stifness:"120"}}>Espéce,carte,onLigne...</motion.p>
            </div>

            </div>
              
            </div>
            </div>
            
  )
}

export default ServiceFooter