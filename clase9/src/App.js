import React from 'react';
import {BrowserRouter as Router, Routes, Route} from'react-router-dom';
import Search from './components/Search.jsx'
import ProductDetail from './components/ProductDetail.jsx'

/*EJEMPLO DE RUTA ESTATICA
import Home from './components/Home.jsx';
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import NavBar from './components/NavBar.js'
DENTRO DEL RETURN:
<Router>
  <NavBar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes> 
    </Router>*/

function App() {
  return (
<Router>
    <Routes>
    <Route exact path="/" element={<Search/>}/>
    <Route path='/product/:id' element={<ProductDetail/>}/>
      </Routes> 
    </Router>
  );
}

export default App;
