import React from 'react' // Ensure React is imported

function TourCard({ tour, removeTour }) {
  const { id, name, info, image, price } = tour

  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h3>{name}</h3>
        <h4>${price}</h4>
        <p>{info}</p>
        <button onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    </div>
  )
}

export default TourCard