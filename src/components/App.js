import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(listings => setListings(listings))
  }, [])

  function removeListing (oldListing) {
    const newListings = listings.filter(listing => listing !== oldListing)
    setListings(newListings)
  }

  const listingsDisplayed = listings.filter(listing => listing.description && listing.description.toLowerCase().match(searchTerm.toLowerCase()))

  console.log(listingsDisplayed)

  return (
    <div className="app">
      <Header setSearchTerm={setSearchTerm} />
      <ListingsContainer listings={listingsDisplayed} removeListing={removeListing} />
    </div>
  );
}

export default App;
