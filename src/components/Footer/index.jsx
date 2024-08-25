import { Box, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import CopyrightIcon from '@mui/icons-material/Copyright'
import SearchFieldComponent from '~/components/AppBar/SearchField/SearchField.component'

function Footer() {
  return (
    <Box sx={{
      backgroundColor: '#000',
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        color: '#fff',
        py: '40px'
      }}>

        <Box sx={{
        }}>
          <Typography sx={{
            textTransform: 'uppercase',
            fontWeight: '700',
            fontSize: '18px'
          }}>
            Exclusive
          </Typography>

          <Typography sx={{ lineHeight: '2' }}>
            Subscribe
          </Typography>

          <Typography sx={{ lineHeight: '2' }}>
            Get 10% off your first order
          </Typography>

          <SearchFieldComponent />
        </Box>

        <Box sx={{
        }}>
          <Typography sx={{
            textTransform: 'uppercase',
            fontWeight: '700',
            fontSize: '18px'
          }}>
            Support
          </Typography>

          <Typography sx={{ lineHeight: '2' }}>
            111 Bijoy sarani, Dhanka, DH 1515, Bangladesh
          </Typography>

          <Typography sx={{ lineHeight: '2' }}>
            exclusive@gmail.com
          </Typography>

          <Typography sx={{ lineHeight: '2' }}>
            +88015-88888-9999
          </Typography>
        </Box>

        <Box sx={{
        }}>
          <Typography sx={{
            // fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
            textTransform: 'uppercase',
            fontWeight: '700',
            fontSize: '18px'
          }}>
            Account
          </Typography>

          <Typography sx={{ lineHeight: '2' }}>
            My Account
          </Typography>

          <Typography sx={{ lineHeight: '2' }}>
            Login/ Register
          </Typography>

          <Typography sx={{ lineHeight: '2' }}>
            Cart
          </Typography>

          <Typography sx={{ lineHeight: '2' }}>
            Wishlist
          </Typography>

          <Typography sx={{ lineHeight: '2' }}>
            Shop
          </Typography>
        </Box>

        <Box sx={{
        }}>
          <Typography sx={{
            // fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
            textTransform: 'uppercase',
            fontWeight: '700',
            fontSize: '18px'
          }}>
            Quick Link
          </Typography>

          <Typography sx={{ lineHeight: '2' }}>
            Privacy Policy
          </Typography>

          <Typography sx={{ lineHeight: '2' }}>
            Terms Of Use
          </Typography>

          <Typography sx={{ lineHeight: '2' }}>
            FAQ
          </Typography>

          <Typography sx={{ lineHeight: '2' }}>
            Contact
          </Typography>
        </Box>

        <Box sx={{
        }}>
          <Typography sx={{
            // fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
            textTransform: 'uppercase',
            fontWeight: '700',
            fontSize: '18px'
          }}>
            Download App
          </Typography>

          <Typography sx={{ lineHeight: '2' }}>
            Save $3 with App New User Only
          </Typography>
        </Box>
      </Box >

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
      }}>
        <Divider style={{
          borderWidth: '1px',
          opacity: '100%',
          color: '#fff'
        }} />

        <CopyrightIcon fontSize="sm" />
        <Typography sx={{
          fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
          fontWeight: '300',
          fontSize: '15px',
          padding: '20px 3px'
        }}>
          Copyright Rimel 2022. All right reserved
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
