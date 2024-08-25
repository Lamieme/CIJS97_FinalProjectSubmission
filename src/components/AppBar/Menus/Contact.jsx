import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

function Contact() {
  return (
    <Box>
      <Button href='/contact' id="basic-button-recent" sx={{
        textTransform: 'capitalize',
        fontSize: '16px'
      }}>
        Contact
      </Button>
    </Box>
  )
}

export default Contact
