import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../Loading'

/** 매칭이 되기 전까지 Loading 창 보여주기 */
function ChatGuest() {
  return (
    <Container component="main" maxWidth="xs">
      <Loading />
    </Container>
  )
}

export default ChatGuest