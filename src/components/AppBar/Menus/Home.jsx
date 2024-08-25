import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

function Home() {
  return (
    <Box>
      <Button href='/product' id="basic-button-workspaces" sx={{
        textTransform: 'capitalize',
        fontSize: '16px'
      }}>
        Home
      </Button>
    </Box>
  )
}

export default Home
