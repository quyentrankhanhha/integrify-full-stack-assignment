import { Box } from '@mui/material'
import React from 'react'
import SearchBar from '../components/SearchBar'

const HomePage = ({ data }) => {
  return (
    <Box>
      <SearchBar data={data} />
    </Box>
  )
}

export default HomePage
