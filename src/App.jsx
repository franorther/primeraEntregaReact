import React from "react";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer text="Soy un greeting"/>
    </>
  );
}

export default App;
