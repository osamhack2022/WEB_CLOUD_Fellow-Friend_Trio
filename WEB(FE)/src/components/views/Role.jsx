import Grid2 from '@mui/material/Unstable_Grid2'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React from 'react'
function Role() {
  const navigate = useNavigate();
  return (
    <Grid2 container spacing={0} sx={{ height: 950, backgroundColor: '#CAC5DB', boarderRadius: '20%' }}>
      <Box
        component="div"
        sx={{
          width: '33%',
          height: '100%',
          backgroundColor: '#829382',
          margin: '0 auto' /*중앙정렬*/,
          transition: 'all 0.5s' /*0.5초동안 변함*/,
          fontSize: 36,
          textAlign: 'center',
          alignContent: 'center',
          '&:hover': {
            backgroundColor: '#755BD4',
            opacity: [0.9, 0.8, 0.7],
          },
          borderRadius: '20%',
        }}
      >
        <Box
          component="img"
          alt="용사 선택"
          sx={{
            textAlign: 'center',
            objectFit: 'cover',
            width: '33vw',
            height: '89vh',
            borderRadius: '20%',
          }}
          src="https://previews.dropbox.com/p/thumb/ABqSFznWXmF49kqqFVtxbUGfR79eZ6sbaIXTE7Hd0-Iavc-4j4cqVyqure07-4cQJjIEqr1OOvNLjZx3F1d6qPv_yUM4_8O86N45xYuyVRRt-6XO0T1JiWNP_ZiSbS3GhmBTwvgmnsiLCxw504xcZ_Xz2T7UX4J2q7aPdj8WFLfLJET6mABtZs3c0mMCQ39CkyKC7MYaIydoz1BKMX1CopcB25KfD1KLvCfQObQpudSkZwgXJ1Vi6h3KnCHj6VpGzDl6Kcir4t9HUlBInGoaMmjBpQ15o8KZY6Z28lYIPmPb5OD5Trgk_qGvY0zAx7g-0TFrxwDrjokIZivp0qbX8DmfotNYQ19W6_Y6O2CYfTKW1XtCVa8IEEYNADkfhjI1zjA/p.jpeg"
          onClick={() => {
            navigate('/login', { state: 'guest' })
          }}
        />
        용사
      </Box>

      <Box
        component="div"
        sx={{
          width: '33%',
          height: '100%',
          backgroundColor: 'primary.dark',
          margin: '0 auto' /*중앙정렬*/,
          transition: 'all 0.5s' /*0.5초동안 변함*/,
          fontSize: 36,
          textAlign: 'center',
          borderRadius: 20,
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Box
          component="img"
          alt="또래상담병 선택"
          sx={{
            objectFit: 'cover',
            textAlign: 'center',
            width: '33vw',
            height: '89vh',
            borderRadius: '20%',
          }}
          src="https://previews.dropbox.com/p/thumb/ABoSaHPU6rNTaCmBSg3hRBMYAOeV0b-_2OEFyzXx8jtPSp9e3Bx2FKBJ90s3wqDcJtI3Fiy4aEEX_Zuv5HWDSc40SgVzIopWDA7w9dVNr4jPYKeMElXtjNBLKfoF3LHdCHvDpdvrKh-QLhAeHMLY7qN9DuERrKKy9gJEBogK88l9QAhFqJyzxOCwWBuoDulqNhvqAAoIl8k-pRNp3VTcyRNOxoRfx9WM1CgKBsTYu11D6LajQSUvLoqRu1-uEvPjSKnGr54tJSBLDniSOz0nZPEW919bx5_Clp4FArqLhasfx64Wj3an9T-DHf1MrBWVPWh7bZQSxqxgYvWZ8V_EmrpNlWthufUXoSMEEmbrmNnNNUaQC7tDqcqnK2Qb6q82lSE/p.jpeg"
          onClick={() => {
            navigate('/login', { state: 'counselor' })
          }}
        />
        또래상담병
      </Box>
      <Box
        component="div"
        sx={{
          width: '33%',
          height: '100%',
          backgroundColor: 'primary.dark',
          margin: '0 auto' /*중앙정렬*/,
          transition: 'all 0.5s' /*0.5초동안 변함*/,
          fontSize: 36,
          textAlign: 'center',
          '&:hover': {
            backgroundColor: '#d5d5d5',
            opacity: [1.0, 0.9, 0.8],
          },
          borderRadius: 20,
        }}
      >
        <Box
          component="img"
          alt="관리자 선택"
          sx={{
            textAlign: 'center',
            objectFit: 'cover',
            width: '33vw',
            height: '90vh',
            borderRadius: '20%',
          }}
          src="https://previews.dropbox.com/p/thumb/ABoLym2CchYKgZ0AZgUns-UlMvHPGPxrkKOrEgK-PVORcQM58vUD-Lrs_7RNdTFLv6x4obYf0tPzIGOFYiQNviLVON4pSg7nlAsq7Mn7CnmS-urh6La5PTLJ_ehfrTdhAMQ9wFF1t-NGQatObA9oEOwgGj3XUJac1gRL06I440YwaP2lKzi602rpfg8XoJXrvAFDc0msFgqlbuLQSOvDeYXBDVcIWlxn7rbwXb8DrPqlVImn7jXuqXlfo6D92jwbvaJWVw_SXs5A8-ziCK5JuKTg8ZP7iIr-LIcXrQceSN779qM92OZnXEhW0CUZJCNehZDkE1dLlEoQwQ0YpIPU4YjxiRBWPDuDxRpNpXHfsPyij7fTmXB6WUMkkI35BpHGqQw/p.jpeg"
          onClick={() => {
            navigate('login', { state: 'admin' })
          }}
        />
        관리자
      </Box>
    </Grid2>
  )
}

export default Role
