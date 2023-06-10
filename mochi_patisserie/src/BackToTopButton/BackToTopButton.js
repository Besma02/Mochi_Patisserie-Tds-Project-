import React,{useState,useEffect} from 'react'

export const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                setBackToTopButton(true)

            }else{
                setBackToTopButton(false)

            }
        })

    },[])
    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })

    }
  return (
    <div>
        {backToTopButton && <svg xmlns="http://www.w3.org/2000/svg" onClick={scrollUp} style={{marginLeft:"auto"}} width="40" height="40" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
        </svg> }
        
        </div>
  )
}
