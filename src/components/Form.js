import React from 'react'

export default function Form() {
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description:</label>
        <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
    </form>
    )}