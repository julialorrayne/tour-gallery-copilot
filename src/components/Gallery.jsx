import TourCard from './TourCard' // Import the TourCard component

function Gallery({ tours, setTours }) {
  // Function to remove a tour by its ID
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id)) // Update state to exclude the removed tour
  }

  return (
    <div className="gallery">
      {/* Map over the tours array and render a TourCard for each tour */}
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </div>
  )
}

export default Gallery