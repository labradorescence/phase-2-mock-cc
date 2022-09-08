import React, {useState} from "react";

function Search({setSearchTerm}) {
  const [searchData, setSearchData] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSearchTerm(searchData)
  }

  function handleChange (e) {
    setSearchData(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchData}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
