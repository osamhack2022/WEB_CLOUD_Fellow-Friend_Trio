import React from 'react'
import { Button, Container, TextField, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import styled from '@emotion/styled'

const LoginContainer = styled.div`
  display: flex;
  height: 98vh;
  border-radius: 5%;
  background: #cfe8fc;
`

const FlexBox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
`

const TitleContainer = styled(Typography)`
  text-align: center;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 1rem;
`

const LoginTextBox = styled(Typography)`
  text-align: center;
  margin-top: 1em;
`
const SpanBox = styled(Typography)`
  text-align: center;
  margin: 1rem 3px 7rem 3px;
  color: #9FA2B4;
`

const DescriptionBox = styled(Typography)`
  text-align: left;
  color: #9FA2B4;
  margin: 5px 5px 5px 4rem;
`

const InputContainer = styled.div`  
  text-align:center;
`

const ButtonContainer = styled.div`
  margin-top: 2rem;
  text-align:center;
  margin-bottom: 3rem;
`

const BottomContainer = styled.div`
  display: flex;
  text-align:center;
  margin-left: 10em;
`

const BottomTextBox = styled.div`
  text-align: 'center';

`

function SignIn() {
  const {state} = useLocation()
  console.log(state)
  return (
    <Container maxWidth="sm" >
      <LoginContainer>
        <FlexBox>
          <TitleContainer variant='h6'>
              Fellow-Friend
          </TitleContainer>
          <LoginTextBox variant='h3'>
              로그인
          </LoginTextBox>
          <SpanBox>군번과 패스워드를 입력해주세요.</SpanBox>
          <DescriptionBox>군번</DescriptionBox>
          <InputContainer>
            <TextField id="outlined-basic" label="군번 ex(22-00000000)" variant="outlined" sx={{width:'80%'}} />
          </InputContainer>
          <DescriptionBox>Password</DescriptionBox>
          <InputContainer>
            <TextField id="outlined-basic" label="Password" variant="outlined" sx={{width:'80%'}}/>
          </InputContainer>
          <ButtonContainer>
            <Button variant="contained" component="label" sx={{width:'80%'}}>로그인</Button>
          </ButtonContainer>

          <BottomContainer>
            <BottomTextBox>계정이 없으신가요?</BottomTextBox>
            <Link to="/register">회원가입</Link>
          </BottomContainer>
          <BottomContainer>
            <BottomTextBox>비밀번호를 잊어버리셨나요?</BottomTextBox>
            <Link to="/f_pw" >PW 찾기</Link>
          </BottomContainer>
        </FlexBox>
      </LoginContainer>
    </Container>
  )
}

export default SignIn