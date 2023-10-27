import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Loading from './components/Loading'
import PostCard from './components/PostCard'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';

function App() {
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(20)

  useEffect(() => {
    getPosts(`http://hn.agolia.com/api/v1/search?page=20`)
  }, [])

  const getPosts = async (url) => {
    try {
      const response = await axios.get(url)
      console.log(response.data);
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

  const handlePaginationChange = (event) => {
    console.log(event.target.innerText);

  }

  return (
    <>
      <h1>Hackernews</h1>
      {/* All error related messages */}
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
        {/* search bar */}
        <TextField
          id="search-bar"
          label="Search"
          onChange={handleChange}
        />

        {/* PAGINATION */}
        {posts &&
        <Pagination count={posts.nbPages} color="primary" onClick={handlePaginationChange} />
        }

        {/* IN CASE WE DON'T GET ANY MATCH RESULTS  */}
        {posts && posts.hits.length == 0 && <h3>No results match your search</h3>} 

        {/* All posts */}
        {!posts ? <Loading /> : posts.hits.map(post => <PostCard post={post} />)}
      </div>
      }
    </>
  )
}

export default App
