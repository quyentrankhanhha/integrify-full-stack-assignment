import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './UserCard.module.css'

const UserCard = ({ data }) => {
  return (
    <Box className={styles.container}>
      <Box className={styles.infoContainer}>
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
        </Grid>
      </Box>

      <Box className={styles.viewDetailContainer}>
        <Link to={'/detail'} state={data}>
          View Detail
        </Link>
      </Box>
    </Box>
  )
}

export default UserCard
