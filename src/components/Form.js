import React, { useState } from 'react'

export default function Form({listingUrl, onAddNewListing}) {

  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [location, setLocation] = useState("")
  
  console.log(description, image, location)

  function handleSubmit (e){
      e.preventDefault()

      const formData = { description, image, location }

      fetch(listingUrl, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          onAddNewListing(data)
        })
        .catch((error) => {
          console.error('Error:', error);
      })
  }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description:</label>
        <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        <label htmlFor="description">Image:</label>
        <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
          <label htmlFor="description">location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            />
            <button type="submit"> Add New Listing </button>
    </form>
    )}