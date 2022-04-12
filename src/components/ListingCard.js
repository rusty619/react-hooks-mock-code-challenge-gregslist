import React, {useState} from "react";

function ListingCard({listing, onDeleteListing}) {

  const {id,description, image, location} = listing
  const [isFav, setIsFav] = useState(false)

  const handleClickButton = () => {
    setIsFav(isFav => !isFav)
  }

  const handleDeleteButton = async() => {
    let req = await fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
    })
    let res = await req.json().then(() => onDeleteListing(listing))
  }

  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button onClick={handleClickButton} className={isFav? "emoji-button favorite active" : "emoji-button favorite"}>
          {isFav ? "★" : "☆"}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteButton}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

//"emoji-button favorite active" - ★
//"emoji-button favorite"  - ☆