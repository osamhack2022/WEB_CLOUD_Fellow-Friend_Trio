import { useNavigate } from 'react-router-dom';
import React from 'react';
import styled from '@emotion/styled';

const FlexContainer = styled.div`
  display: flex;
  width:98vw;
  height:97vh;
`

const Container = styled.div`
  padding: 8;
  display: flex;
  flex-direction: rows;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Animation = styled.div`
  bottom: 20%;
  border-radius: 10px;
  margin-right: 1vw;
  margin-left: 1vw;
  text-align: center;
  transform: rotate(0deg);
  transition: all 500ms ease;
  white-space: nowrap;
  padding: 8;
  height:97vh;
  width:33vw;
  overflow:hidden;
  &:hover {
    width:50em;
  };
  object-fit:cover;
`
// image 넣어야함
const GuestBox = styled(Animation)`
  left: 0;
  background: red;
`
const CounsolerBox = styled(Animation)`
  align-items: center;
  background: pink;
`

const AdminBox = styled(Animation)`
  background: yellow;
`

function Role() {
  const navigate = useNavigate();
  return (
    <FlexContainer>
      <Container>
        <GuestBox onClick={() => {
          navigate('login', { state: 'guest' });
        }}
        ><h2>용사</h2></GuestBox>
        <CounsolerBox onClick={() => {
          navigate('login', { state: 'counsoler' });
        }}
        ><h2>또래상담병</h2></CounsolerBox>
        <AdminBox onClick={() => {
          navigate('login', { state: 'admin' });
        }}
        ><h2>관리자</h2></AdminBox>
      </Container>
    </FlexContainer>
  );
}

export default Role;
