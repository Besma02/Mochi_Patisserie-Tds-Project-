import React from 'react'
import './Produits.css'
import patissiere from './../../assets/patissiere.png'
import fouets from './../../assets/fouets.png'


import {motion} from "framer-motion"


export const Recette = () => {
  return (
    <div>
        <header className='head_content' >
            <div className='body_content'>
            <motion.h1 inital={{y:400}} animate={{y:10}} transition={{delay:1.5,type:"spring",stifness:"120"}} >
                Mochi Produits
            </motion.h1>
            <motion.button   animate={{scale:1.3}} transition={{delay:1.5,type:"spring",stifness:"120"}}>découvrez nos produits</motion.button>
            </div>
      </header>
      
     
      <div className='container'>
      <motion.h2 style={{textAlign: "center",fontSize:"2.5em",color:"#583278",}} inital={{y:'100vh'}} animate={{y:-20}} transition={{delay:0.5,type:"spring"}}> Nos Produits Mochi</motion.h2>
          <motion.p style={{textAlign: "center",fontSize:"1.6 em"}} inital={{opacity:0,y:'100vh'}} animate={{opacity:1,y:-20}} transition={{delay:0.5,type:"spring"}} >
              Elastique et fondant, sucré et deux fois moins calorique nous préparons le mochi de manière artisanale 100% végétal et sans gluten.
          </motion.p>
         
        
        <div className='article'>
          <div className='recette'>
          
            <div className="row">
              <div className='col-sm-12 col-md-6 col-lg-6'>
                   <motion.h2 inital={{y:400}} animate={{y:10}} transition={{delay:1.5,type:"spring",stifness:"120"}}>la recette pour réaliser dix mochis à la vapeur </motion.h2>
              </div>
              <div className='col-sm-12 col-md-6 col-lg-6 '>
                <motion.div className='ingred' inital={{y:400}} animate={{y:10}} transition={{delay:1.5,type:"spring",stifness:"120"}}>
                    <h3 style={{fontWeight:"bold"}}>Les ingrédients</h3>
                    <p>
                      -100 g de farine de riz <br/>
                      - 60 g sucre

                    </p>
                    

                    </motion.div>
                   <div  className="patisserie" >
                    <motion.img src={fouets} inital={{x:400}} animate={{x:-10}} transition={{delay:1.5,type:"spring",stifness:"120"}} />
                    </div>

               </div>
            </div>
          

       
        
            <div className="row">
              <div className='col-sm-12 col-md-6 col-lg-6' >
                   <motion.img src={patissiere} alt="cooker" className='cooker' inital={{y:400}} animate={{y:-40}} transition={{delay:1.5,type:"spring",stifness:"120"}}/>
                  
              </div>
              <div className='col-sm-12 col-md-6 col-lg-6 '>
                <motion.div className='etapes' style={{marginTop:"10%"}} inital={{y:400}} animate={{y:-10}} transition={{delay:1.5,type:"spring",stifness:"120"}} >
                    <h3 style={{fontWeight:"bold",marginBottom:"20px"}}>Les étapes:</h3>
                    <p>
                    <span >1</span>- Dans un bol, versez 100 g de farine de riz gluant et 60 g sucre.
                     </p>
                     <p>
                     <span >2</span>- Mélangez à l'aide d'un fouet puis rajoutez 150 ml d’eau. Vous devez obtenir une pâte lisse.
                     </p>
                     <p>
                     <span >3</span>- Faites bouillir de l’eau dans une casserole et placez le bol à l'intérieur. Recouvrez d’un couvercle. Faites cuire pendant 10 minutes. La pâte doit devenir épaisse et brillante.
                    
                    </p>
                    </motion.div>
               </div>
               <motion.div className="row" inital={{y:400}} animate={{y:-20}} transition={{delay:1.5,type:"spring",stifness:"120"}}>
              <div className='col-sm-12 col-md-6 col-lg-6' style={{marginTop:"10%"}} >
               <p className='part2' >
               <span >4</span>- Saupoudrez un plan de travail de fécule de pomme de terre ou de maïzena. Et étalez la pâte au rouleau à pâtisserie.
               </p>
               <p>
               <span >5</span>- Découpez grâce à un cercle des disques de 8 cm de diamètre.
               </p>
               <p>
               <span >6</span>- Déposez dans votre main un disque de pâte et placez-y une boule de garniture. Entourez la garniture en pinçant le dessous et arrondissez la boule.
                   </p>
                   </div>

                   <div className='col-sm-12 col-md-6 col-lg-6' >
                    <div className='conseils'>
                      <h3 style={{fontWeight:"bold"}}>Conseils:</h3>
                      <p>
                         
                       Vous pouvez les dégustez immédiatement. Sinon, conservez-les dans un endroit frais et sec, idéalement entre 14 et 19 °C et à l'abri de la lumière. Evitez de les mettre au réfrigérateur qui les durcit. Et dernier conseil : vous pouvez les conserver au maximum six jours.

                      </p>
                    </div>
                   </div>
                   </motion.div>
            </div>
          </div>

        </div>
     </div>
    </div>
  )
}
