import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [search, setSearch] = useState("")
  const [listings,setListings] = useState([])

  useEffect(()=>{
    (
      async () => {
        let req = await fetch('http://localhost:6001/listings')
        let res = await req.json()
        setListings(res)
      }
    )()
  },[])

  const handleDeleteListing = (deletedListing) => {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id)
    setListings(updatedListings)
  }

  const displayedListings = listings.filter((listing) => 
    listing.description.toLowerCase().includes(search.toLowerCase()) )

  return (
    <div className="app">
      <Header onSearch = {setSearch}/>
      <ListingsContainer handleDeleteListing={handleDeleteListing} 
                         listings={displayedListings} />
    </div>
  );
}

export default App;
