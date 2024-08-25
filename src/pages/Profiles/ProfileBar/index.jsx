import { Container, Typography } from '@mui/material'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'


function ProfileBar() {
  return (
    <Container maxWidth={'xl'} sx={{
      display: 'flex',
      justifyContent: 'space-between',
      py: 20
    }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          fontWeight='700'
        >
          My Account
        </Link>
      </Breadcrumbs>
      <Typography component={'span'}>
        Welcome! <Typography component={'span'} color={'#DB4444'}>Hoang Lam</Typography>
      </Typography>
    </Container>
  )
}

export default ProfileBar