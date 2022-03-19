import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const UserDetail = () => {
  return (
    <Box>
      <Box>
        <Typography>Showing detail about each brewery</Typography>
      </Box>
      <Typography>Name: </Typography>
      <Typography>Brewery Type: </Typography>
      <Typography>Street: </Typography>
      <Typography>Address 2: </Typography>
      <Typography>Address 3: </Typography>
      <Typography>City: </Typography>
      <Typography>State: </Typography>
      <Typography>County Provine: </Typography>
      <Typography>Postal Code: </Typography>
      <Button>Go Back</Button>
    </Box>
  )
}

export default UserDetail
