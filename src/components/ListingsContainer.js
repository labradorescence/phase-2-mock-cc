import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({data, onDelete}) {
  function renderCards() {
    return data.map(listing => {
      return <ListingCard 
        key={listing.id} 
        data={listing} 
        onDelete={onDelete}
      />
    })
  }
  return (
    <main>
      <ul className="cards">
        {
          renderCards()
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
