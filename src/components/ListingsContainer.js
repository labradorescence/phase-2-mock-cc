import React, { useState, useEffect }  from "react";
import ListingCard from "./ListingCard";
const listingUrl = "http://localhost:6001/listings"

function ListingsContainer({search}) {

  const [listings, setListings] = useState([])

  useEffect(()=>{
    fetch(listingUrl)
      .then(resp=> resp.json())
      .then(data => setListings(data))
  }, [])

  function onDelete(id){
    let listingsAfterDelete = listings.filter((listing) => listing.id !== id)
    setListings(listingsAfterDelete)
  }

  const eachListing = listings
    .filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
        return a.location.localeCompare(b.location)
    })
    .map((listing) => {
    return (
      <ListingCard listing = {listing} listingUrl={listingUrl} onDelete={onDelete}/>
    )
  })

  return (
    <main>
      <ul className="cards">
        {eachListing}
      </ul>
    </main>
  );
}

export default ListingsContainer;
