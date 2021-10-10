import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './App.css'
import { IBeerOfTheNow } from './interfaces'
import BeerOfTheNow from './components/BeerOfTheNow'
import NextBeer from './components/NextBeer'
import { Box } from '@mui/system'
import { Paper, AppBar, Typography, Toolbar, makeStyles } from '@mui/material'
import Footer from './components/Footer'
import { ThemeProvider } from '@mui/material/'

const API_URL = 'https://api.punkapi.com/v2/beers/random'

const theme = {}

const useStyles = {}

function App() {
  const [beer, setBeer] = useState()
  const [loading, setLoading] = useState(false)
  async function fetchBeer() {
    const response = await axios.get(API_URL)
    setBeer(response.data[0]) // Returns only one beer in the array
  }
  useEffect(() => {
    setLoading(true)
    fetchBeer()
    setLoading(false)
  }, [])

  function handleChange() {
    fetchBeer()
  }

  return (
    <div
      className='App'
      style={{
        backgroundImage: 'linear-gradient(to bottom, #C96E12, #FFF897)'
      }}
    >
      <Box>
        <AppBar
          position='static'
          style={{
            backgroundColor: '#F6F6E3'
          }}
        >
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1 }}
              color='black'
            >
              Beer of the Now
            </Typography>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <NextBeer changeBeer={handleChange} />
            </Typography>
          </Toolbar>
        </AppBar>
        {beer && <BeerOfTheNow {...beer} />}
        <Footer />
      </Box>
    </div>
  )
}

export default App
