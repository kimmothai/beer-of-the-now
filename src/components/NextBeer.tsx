import React from 'react'
import { Button } from '@mui/material'
import { SportsBar } from '@mui/icons-material'

export default function NextBeer({ changeBeer }: { changeBeer: Function }) {
  return (
    <Button
      variant='contained'
      color='warning'
      size='small'
      onClick={() => changeBeer()}
    >
      Another one, please! <SportsBar />
    </Button>
  )
}
