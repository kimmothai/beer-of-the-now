import React from 'react'
import { Typography, Link, Paper } from '@mui/material'

export default function Footer() {
  return (
    <footer>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={1}
      >
        <Typography variant='body2' color='text.secondary' align='center'>
          {'Copyright © '}
          <Link color='inherit' href='https://github.com/kimmothai'>
            Kimmo Thai
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Paper>
    </footer>
  )
}
