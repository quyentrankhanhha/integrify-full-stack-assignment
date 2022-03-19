import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import styles from './SearchBar.module.css'
import UserCard from './UserCard'

const keys = [
  'name',
  'brewery_type',
  'street',
  'address_2',
  'address_3',
  'city',
  'state',
  'county_province',
  'postal_code',
  'country',
  'phone',
  'website_url',
]

const SearchBar = ({ data }) => {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)

    // const newFilter = data.filter((value) => {
    //   return value.name.toLowerCase().includes(searchWord.toLowerCase())
    // })

    const newFilter = data?.filter((item) => {
      return keys?.some((key) => {
        return item[key]?.toLowerCase()?.includes(searchWord?.toLowerCase())
      })
    })

    if (searchWord === '') {
      setFilteredData([])
    } else setFilteredData(newFilter)
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }

  return (
    <Box className={styles.search}>
      <Box>
        <Box className={styles.searchInputs}>
          <input
            type='text'
            placeholder='Search...'
            value={wordEntered}
            onChange={handleFilter}
          />
          <Box className={styles.searchIcon}>
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id='clearBtn' onClick={clearInput} />
            )}
          </Box>
        </Box>
        {filteredData.length !== 0 && (
          <Grid
            container
            justifyContent='flex-start'
            className={styles.dataResult}
          >
            {filteredData.slice(0, 5).map((info, index) => (
              <Grid item xs={4} key={index}>
                <UserCard data={info} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  )
}

export default SearchBar
