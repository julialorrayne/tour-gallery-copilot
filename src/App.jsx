import { useState, useEffect } from 'react'
import './App.css'
import Gallery from './components/Gallery'

function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchTours = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch("https://course-api.com/react-tours-project")

      if (!response.ok) {
        throw new Error('Failed to fetch tours')
      }
      const data = await response.json()
      setTours(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>Error: {error}</h2>
  }

  if (tours.length === 0) {
    return (
      <div>
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    )
  }

  return <Gallery tours={tours} setTours={setTours} />
}

export default App
