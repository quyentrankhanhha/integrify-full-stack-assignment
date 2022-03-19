import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './UserDetail.module.css'

const UserDetail = ({ data }) => {
  let history = useNavigate()

  return (
    <Box className={styles.container}>
      <Box className={styles.box}>
        <Box className={styles.titleContainer}>
          <Typography variant='h5'>Showing detail about brewery</Typography>
        </Box>
        <Box className={styles.infoContainer}>
          <Grid container>
            <Grid item xs={4}>
              <Typography>Name: </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{data.name || 'None'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Brewery Type:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{data.brewery_type || 'None'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Street: </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{data.street || 'None'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Address 2: </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{data.address_2 || 'None'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Address 3: </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{data.address_3 || 'None'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>City: </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{data.city || 'None'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>State: </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{data.state || 'None'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>County Provine: </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{data.county_province || 'None'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Postal Code: </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{data.postal_code || 'None'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Country: </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{data.country || 'None'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Longitude: </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{data.longitude || 'None'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Latitude: </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{data.latitude || 'None'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Phone: </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{data.phone || 'None'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Website: </Typography>
            </Grid>
            <Grid item xs={8}>
              <a href={data.website_url}>{data.website_url || 'None'}</a>
            </Grid>
          </Grid>
        </Box>
        <Box className={styles.containerBtn}>
          <Button onClick={() => history('/')}>Go Back</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default UserDetail
