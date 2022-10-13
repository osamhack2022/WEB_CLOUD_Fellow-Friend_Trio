import React from 'react'
import { Container, Grid, Link, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
function SignIn() {
  const {state} = useLocation()
  console.log(state)
  return (
    <Grid
      sx={{
        width: '99vw',
        height: '98vh',
        background: '#363740',
        display: 'flex',
      }}
    >
      <Container
        maxWidth="sm"
        fixed
        sx={{
          background: 'white',
          // postion: 'absolute',

          // height: '75vh',
          // width: '55vw',
          // alignItems: 'center',
          // justifyContent: 'center',
          borderRadius: '5%',
          display: 'grid',
          gridTemplateColumns: '200px 200px 500px',
          gridTemplateRows: '200px 200px 500px',
        }}
      >
        <div>Fellow-Friend</div>
        <div>로그인</div>
        <div>군번 과 패스워드를 입력해주세요.</div>
        <div>
          군번
        </div>
      </Container>
    </Grid>
  )
}

export default SignIn