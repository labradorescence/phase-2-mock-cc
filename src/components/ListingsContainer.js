import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import Form from "./Form"
const listingUrl = "http://localhost:6001/listings"

function ListingsContainer({ search }) {

  const [listings, setListings] = useState([])
   
  useEffect(()=>{
    fetch(listingUrl)
      .then(resp => resp.json())
      .then(data => setListings(data))
  }, [])

  function onDelete(id){
    let listingAfterDelete = listings.filter((listing) => listing.id !==id)
    setListings(listingAfterDelete)
  }

  function onAddNewListing(newListing){
    setListings([...listings, newListing])
  }

  let eachListing = listings
    .filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      return a.location.localeCompare(b.location)
    })
    .map((listing) => {
    return(
      <ListingCard listing={listing} listingUrl={listingUrl} onDelete={onDelete}/>
    )
  })

  return (
    <main>
      <ul className="cards">
        <Form listingUrl={listingUrl} onAddNewListing={onAddNewListing}/>
        {eachListing}
      </ul>
    </main>
  );
}

export default ListingsContainer;
