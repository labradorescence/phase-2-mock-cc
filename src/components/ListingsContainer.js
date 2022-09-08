import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({list}) {
  const cards=list.map((lis)=>
  <ListingCard list={list} lis={lis}  key={lis.id}/>
  )
  return (
    <main>
      <ul className="cards">
        {cards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
