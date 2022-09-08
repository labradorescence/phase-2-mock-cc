import React, {useState} from "react";

function ListingCard({listing, listingUrl, onDelete}) {

  const [favorite, setFavorite] = useState(true)

  const {id, description, image, location} = listing

  function handleDelete(){
    fetch(`${listingUrl}/${id}`, {
      method: 'DELETE',
    })
      .then(resp => resp.json())
      .then(() => onDelete(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details" onClick = {(()=> setFavorite(!favorite))}>
        {favorite ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
