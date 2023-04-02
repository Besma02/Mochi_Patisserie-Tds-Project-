
import { Acceuil } from "./components/Acceuil/Acceuil";
import { Contact } from "./components/Contact/Contact";
import { Navs } from "./components/Navs/Navs";
import { Produits } from "./components/Produits/Produits";
import { Services } from "./components/Services/Services";
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navs/>
      <Routes >
        <Route path="/" element={ <Acceuil/>}/>
        <Route path="/Produits" element={ <Produits/>}/>
        <Route path="/Services" element={ <Services/>}/>
        <Route path="/Contact" element={ <Contact/>}/>
        
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
