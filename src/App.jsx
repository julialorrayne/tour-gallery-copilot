import { useState, useEffect } from 'react'
import './components/style.css' // Import global styles
import Gallery from './components/Gallery' // Import the Gallery component

function App() {
  // State variables to manage tours, loading state, and errors
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Function to fetch tours from the API
  const fetchTours = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch("https://www.course-api.com/react-tours-project")

      if (!response.ok) {
        throw new Error('Failed to fetch tours') // Handle HTTP errors
      }
      const data = await response.json()
      setTours(data) // Update tours state with fetched data
    } catch (err) {
      setError(err.message) // Handle fetch errors
    } finally {
      setLoading(false) // Stop loading spinner
    }
  }

  // Fetch tours when the component mounts
  useEffect(() => {
    fetchTours()
  }, [])

  // Display loading message while fetching data
  if (loading) {
    return <h2>Loading...</h2>
  }

  // Display error message if an error occurs
  if (error) {
    return <h2>Error: {error}</h2>
  }

  // Display a refresh button if no tours are left
  if (tours.length === 0) {
    return (
      <div>
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    )
  }

  // Render the Gallery component with the tours data
  return <Gallery tours={tours} setTours={setTours} />
}

export default App
