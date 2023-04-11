import React,{useState} from 'react'

export const Accordian = () => {
  const[data,setData]=useState([{title:'Qualité des ingrédients',content:"Nous offrons de haute qualité, délicieux Mochi, Consultez notre menu pour en savoir plus."},
  {title:'Notre philosophie',content:"Nous sommes guidés par nos valeurs d’Intégrité, d’Équité, d’Honnêteté et de la Persévérance, Ensemble, elles représentent qui nous sommes et comment nous agissons, nous aidant à prendre des décisions dont nous pouvons être fiers aujourd’hui et à l’avenir."},
 
  {title:'Notre vision',content:"Notre vision est de fournir ce que vous trouverez à déguster,des créations amusantes et originales "}
  
  ])
  const[selected,setSelected]=useState(null)
  const toggle=(index)=>{
        if(selected==index){
          return setSelected(null)
        }
        setSelected(index)
  }

  return (
     <div className="App">
       <div className="wrapper">
         <div className="accordian">
          {data.map((info,index)=>(
           <div className="info" key={info.index}>
            <div className="title" onClick={()=>toggle(index)}>
              <h3 >{info.title}</h3>
              <span>{selected==index?'-':'+'}</span>
              </div>
              <div className={selected==index?'content show':'content'}>
              <p >{info.content}</p>
              </div>
           </div>)

          )}

       </div>

       </div>

   </div>
  
  )
 
}
