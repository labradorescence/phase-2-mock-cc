import React, {useState} from "react";

function ListingCard({listing, removeListing}) {
  const [favorite, setFavorite] = useState(true)

  const {id, description, image, location} = listing

  function handleFavorite () {
    setFavorite(!favorite)
  }

  function handleDelete () {
    removeListing(listing)
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(listing => console.log(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
