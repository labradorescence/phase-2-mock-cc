import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const[list,setList]=useState([])
  const[searchterm,setSearchTerm]=useState([])
  const api="http://localhost:6001/listings";

useEffect(()=>{
  fetch(api)
  .then(res=>res.json())
  .then(setList)
},[])

// const listToDisplay=list.filter(listski=>
// listski.includes(searchterm)
// )

  return (
    <div className="app">
      <Header  />
      <ListingsContainer  list={list} />
    </div>
  );
}

export default App;
