import { Container } from '@mui/material'
import AppBar from '~/components/AppBar'
import Footer from '~/components/Footer'
import ProfileBar from '~/pages/Profiles/ProfileBar'
import NotFoundContent from '~/pages/NotFounds/NotFoundContent'

function NotFound() {
  return (
    <Container disableGutters maxWidth={'xl'} sx={{ height: '100vh' }}>
      <ProfileBar />
      <NotFoundContent />
    </Container>
  )
}

export default NotFound
