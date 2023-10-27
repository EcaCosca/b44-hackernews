import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Loading from './components/Loading'
import PostCard from './components/PostCard'

function App() {
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getPosts("http://hn.algolia.com/api/v1/search?tags=story")
  }, [])

  const getPosts = async (url) => {
    try {
      const response = await axios.get(url)
      setPosts(response.data)
    } catch (error) {
      setError(error)
    }
  }

  
  // create a api search to find the l;atest stories with maches from the search
  // http://hn.algolia.com/api/v1/search?query=foo&tags=story


  return (
    <>
      <h1>Hackernews</h1>
      {!posts ? <Loading /> : posts.hits.map(post => <PostCard post={post} />)}
    </>
  )
}

export default App
