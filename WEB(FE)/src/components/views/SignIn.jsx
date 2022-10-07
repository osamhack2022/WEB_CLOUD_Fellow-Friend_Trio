import React from 'react'
import MuiTypography from '@mui/material/Typography'
function SignIn() {
  return (
    <div>
      <React.Fragment>
        <MuiTypography variant="h3" gutterBottom marked="center" align="center">
          로그인
        </MuiTypography>
        <MuiTypography variant="body2" align="center">
          {'회원가입을 하고 싶다면,   '}
          <Link href="register" align="center" underline="always">
            여기를 눌러 가입하세요!
          </Link>
        </MuiTypography>
      </React.Fragment>
    </div>
  )
}

export default SignIn