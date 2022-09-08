import React, { useState } from "react";

function Search() {
  const[formdata,setFormData]=useState(null)
  function handChange(e){
setFormData({...formdata,[e.target.name]:e.target.value})
}


  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:6001/listings",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formdata)
    })
    .then(res=>res.json)
    .then(setFormData)
  }

  
  return (
    <form onChange={handChange} className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        // value={""}
      
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
