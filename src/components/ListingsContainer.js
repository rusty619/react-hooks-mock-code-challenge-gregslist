import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({handleDeleteListing, listings}) {

  return (
    <main>
      <ul className="cards">
        {
          listings.map( (listing) => {
            return(
              <ListingCard key={listing.id} listing={listing} onDeleteListing={handleDeleteListing} />
            )
          })
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
