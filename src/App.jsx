import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Loading from './components/Loading'
import PostCard from './components/PostCard'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getPosts("http://hn.agolia.com/api/v1/search?tags=story")
  }, [])

  const getPosts = async (url) => {
    try {
      const response = await axios.get(url)
      setPosts(response.data)
      setError(null)
    } catch (error) {
      console.log(error);
      setError(error)
      setPosts(null)
    }
  }

  const handleChange = (event) => {
    getPosts(`http://hn.algolia.com/api/v1/search?query=${event.target.value}&tags=story`)
  }
  
  const handleClick = (event) => {
    getPosts("http://hn.algolia.com/api/v1/search?tags=story")
  }

  return (
    <>
      <h1>Hackernews</h1>
      {error 
      ? 
      <div>
      <h2>{error.message}</h2>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={handleClick}>Refresh</Button>
      </Stack>
      </div>
      :
      <div>
      <TextField
          id="search-bar"
          label="Search"
          onChange={handleChange}
        />
      {!posts ? <Loading /> : posts.hits.map(post => <PostCard post={post} />)}
      </div>
      }
    </>
  )
}

export default App
