
import { Acceuil } from "./components/Acceuil/Acceuil";

import { Contact } from "./components/Contact/Contact";
import { Navs } from "./components/Navs/Navs";
import { Produits } from "./components/Produits/Produits";
import { Services } from "./components/Services/Services";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer } from "./components/footer/Footer";
import { Cart } from "./components/Produits/Cart";

function App() {
  return (<>
    <BrowserRouter>
         <div className="App">
      <Navs/>
      <Routes >
        <Route path="/" element={ <Acceuil/>}/>
        <Route path="/Produits" element={ <Produits/>}/>
        <Route path="/Services" element={ <Services/>}/>
        <Route path="/Cart" element={ <Cart/>}/>

        <Route path="/Contact" element={ <Contact/>}/>
        
     </Routes>
     <Footer/>
     </div>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
