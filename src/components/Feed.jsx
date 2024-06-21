import React from 'react'
import {  Box } from '@mui/material'
import Post from './Post'
import Post2 from './Post2'
import Post3 from './Post3'
import Post4 from './Post4'

const Feed = () => {
  return (
    <Box  flex={4} p={2}>
      <Post />
      <Post2 />
      <Post3 />
      <Post4 />
    
    </Box>
  )
}

export default Feed
