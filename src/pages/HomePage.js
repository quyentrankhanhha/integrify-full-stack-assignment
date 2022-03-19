import { Container } from '@mui/material'
import React from 'react'
import SearchBar from '../components/SearchBar'

const HomePage = ({ data }) => {
  return (
    <Container>
      <SearchBar data={data} />
    </Container>
  )
}

export default HomePage
