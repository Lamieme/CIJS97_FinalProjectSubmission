import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

function NotFoundContent() {
  return (
    <div>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
      }}>
        <Typography sx={{
          fontWeight: '700',
          fontSize: '150px'
        }}>
          404 Not Found
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        // marginTop: '50px',
      }}>
        <Typography sx={{
          fontWeight: '400',
          fontSize: '20px'
        }}>
          Your visited page not found. You may go homepage
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
        marginBottom: '50px'
      }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#DB4444',
            '&:hover': {
              backgroundColor: '#b83838', // Slightly darker shade for hover effect
            },
          }}
        >
          View All Products
        </Button>

      </Box>
    </div >
  )
}

export default NotFoundContent
