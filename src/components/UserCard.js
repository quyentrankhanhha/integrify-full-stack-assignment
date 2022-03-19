import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const UserCard = ({ data }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography>Name: </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography>{data.name}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>Brewery Type:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography>{data.brewery_type}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>City: </Typography>
      </Grid>

      <Grid item xs={8}>
        <Typography>{data.city} </Typography>
      </Grid>

      <Button>View Detail</Button>
    </Grid>
  )
}

export default UserCard
