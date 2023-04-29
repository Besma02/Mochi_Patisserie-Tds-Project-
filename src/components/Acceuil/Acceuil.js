import React from 'react'
import { Header } from './Header'
import { Apropos } from './Apropos'
import { Gallery3D } from './Gallery3D'
import { Newsletter } from './Newsletter'




export const Acceuil = () => {
  return (
    <div>
     <Header/>
     <Apropos/>
     <Gallery3D/>
      <Newsletter/>
    </div>
  )
}
