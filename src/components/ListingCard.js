import React, { useState } from "react";

function ListingCard({listing, listingUrl, onDelete}) {

  const {id, description, image, location} = listing

  const [ favorite, setFavorite ] = useState(true)

  function handleDelete(){
    fetch(`${listingUrl}/${id}`, {
      method: 'DELETE',
    })
    .then(resp => resp.json())
    .then(() => onDelete(id) )
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick = { () => setFavorite(!favorite)} >★</button>
        ) : (
          <button className="emoji-button favorite" onClick = { () => setFavorite(!favorite)} >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
