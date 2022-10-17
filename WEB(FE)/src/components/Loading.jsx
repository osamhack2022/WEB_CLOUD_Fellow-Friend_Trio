import * as React from 'react'
import Box from '@mui/material/Box'
import { CircularProgress } from '@mui/material'



export default function Loading() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  )
}
