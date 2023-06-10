
import { Acceuil } from "./components/Acceuil/Acceuil";
import { Contact} from "./components/Contact/Contact";
import { Navs } from "./components/Navs/Navs";
import { Produits } from "./components/Produits/Produits";
import { Services } from "./components/Services/Services";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer } from "./components/footer/Footer";
import { Cart } from "./components/Produits/Cart";
import { SignIn } from "./components/SignIN/SignIn";
import { Login } from "./components/SignIN/Login";
import { ProductList } from "./components/Produits/ProductList";
import { createAction } from "@reduxjs/toolkit";



function App() {
 

  
   
  return (<>
    <BrowserRouter>
         <div className="App">
      <Navs  />
      <Routes >
        <Route path="/" element={ <Acceuil/>}/>
        <Route path="/Produits" element={ <Produits/>}/>
        <Route path="/Services" element={ <Services/>}/>
        <Route path="/Cart" element={ <Cart/>}/>
        <Route path="/SignIn" element={ <SignIn/>}/>
        <Route path="/Login" element={ <Login/>}/>
        <Route path="/ProductList" element={ <ProductList/>}/>

        <Route path="/Contact" element={ <Contact/>} action={createAction} />
        
     </Routes>
     
     <Footer/>
     </div>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
