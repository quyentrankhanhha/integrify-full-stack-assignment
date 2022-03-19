import { Container } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router'
import UserDetail from '../components/UserDetail'

const DetailPage = () => {
  const location = useLocation()

  return (
    <Container>
      <UserDetail data={location.state} />
    </Container>
  )
}

export default DetailPage
