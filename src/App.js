import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import DetailPage from './pages/DetailPage'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'

function App() {
  const [infoList, setInfoList] = useState([])

  useEffect(() => {
    axios
      .get('https://api.openbrewerydb.org/breweries')
      .then((res) => {
        setInfoList(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <Routes>
      <Route index element={<HomePage data={infoList} />} />
      <Route path='detail' element={<DetailPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default App
