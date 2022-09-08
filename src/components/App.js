import React, { useState, useEffect } from 'react';
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const listingAPI = 'http://localhost:6001/listings';

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')
  const [sortValue, setSortValue] = useState('')

  console.log(sortValue);

  useEffect(() => {
    fetch(listingAPI)
    .then(r => r.json())
    .then(setListings);
  }, [])

  function filterListings() {
    let filteredListings;
    filteredListings = listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))
    
    if(sortValue) {
      filteredListings.sort((a, b) => {
        if(a[sortValue].toLowerCase() < b[sortValue].toLowerCase()) { return -1; }
        if(a[sortValue].toLowerCase() > b[sortValue].toLowerCase()) { return 1; }
        return 0;
      })
    }

    return filteredListings
  }

  function handleDelete(id) {
    setListings(listings => listings.filter(listing => listing.id !== id))
    fetch(`${listingAPI}/${id}`, {
      method: 'DELETE',
    })
  }

  return (
    <div className="app">
      <Header
        search={search}
        setSearch={setSearch}
        setSortValue={setSortValue}
      />
      <ListingsContainer
        data={filterListings()}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
