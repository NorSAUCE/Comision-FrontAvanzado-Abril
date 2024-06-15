import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Navigation from './Navigation.js'
import UserDetail from './components/UserDetail.jsx'

function App() {
  return (
<Router>
    <Navigation/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="/user/:id" element={<UserDetail/>}/>
      </Routes> 
    </Router>
  );
}

export default App;
