import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getPosts("http://hn.algolia.com/api/v1/search?tags=front_page")
  }, [])

  const getPosts = async (url) => {
    try {
      const response = await axios.get(url)
      console.log(response);
      setPosts(response.data.hits)
    } catch (error) {
      setError(error)
    }
  }


  // create a api search to find the l;atest stories with the following url
  // http://hn.algolia.com/api/v1/search?tags=front_page

  
  // create a api search to find the l;atest stories with maches from the search
  // http://hn.algolia.com/api/v1/search?query=foo&tags=story


  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
