import logo from './logo.svg';
import React from "react"
import './App.css';
import NavBar from "./Components/NavBar"
;
function App() {
  return (
      <div className="App">
     <Navbar/>
     <CartWidget/>
     <ItemListContainer/>
     
  </div>

  );
}

export default App;
