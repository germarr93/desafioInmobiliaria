import logo from './logo.svg';
import React from "react"
import './App.css';
import NavBar from "./Components/NavBar"
;
function App() {
  return (
      <div className="App">
     <Navbar/>  
     <ItemListContainer title="Bienvenidos a la Inmobiliaria mas accesible de tu pais."/>
     
  </div>

  );
}

export default App;
