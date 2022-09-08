import React, { useState } from "react";

function ListingCard({lis}) {
  const[star,setStar]=useState(true)
  // const[hideski,setHideSki]=useState("")

  

  function favClick(){
    setStar((star)=>!star)
  }
  

const {description,image,location}=lis
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
         {  star ? (
          <button onClick={favClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={favClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={""} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
