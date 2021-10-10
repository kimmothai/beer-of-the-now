import React from 'react'
import { IBeerOfTheNow } from '../interfaces'
import {
  Container,
  Box,
} from '@mui/material'

export default function BeerOfTheNow({
  id,
  name,
  tagline,
  first_brewed,
  description,
  image_url,
  abv,
  ibu,
  target_fg,
  target_og,
  ebc,
  srm,
  ph,
  attenuation_level,
  volume,
  boil_volume,
  method,
  ingredients,
  food_pairing,
  brewers_tips,
  contributed_by
}: IBeerOfTheNow) {

  return (
    <div className='beer-of-the-now'>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'column' },
            alignItems: 'center'
          }}
        >
          <h1 className='beer-of-the-now'>{name}</h1>
          <p className='tagline'>"{tagline}"</p>
          <p className='description'>{description}</p>
          <div className='brewers-tips'>
            <h3>Brewer's tips</h3>
            <p>"{brewers_tips}"</p>
          </div>
          <div className='food-pairing'>
            <h3>Goes well with</h3>
            <ul>
              {food_pairing.map((item) => {
                return (
                <>
                <li key={item}>{item}</li>
                </>)
              })}
            </ul>
          </div>
        </Box>
      </Container>
    </div>
  )
}
