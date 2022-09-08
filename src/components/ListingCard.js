import React, { useState } from 'react';

function ListingCard({data, onDelete}) {
  const { id, description, image, location } = data

  const [isLiked, setIsLiked] = useState(false)

  function renderButtonClass() {
    return isLiked ? "emoji-button favorite active" : "emoji-button favorite";
  }

  function renderButtonContent() {
    return isLiked ? "★" : "☆" ;
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button onClick={() => setIsLiked(liked => !liked)} className={renderButtonClass()}>{renderButtonContent()}</button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={() => onDelete(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
