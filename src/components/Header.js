import React from "react";
import Search from "./Search";
import Sort from "./Sort";

function Header({search, setSearch, setSortValue}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search
        search={search}
        setSearch={setSearch}
      />
      <Sort
        setSortValue={setSortValue}
      />
    </header>
  );
}

export default Header;
