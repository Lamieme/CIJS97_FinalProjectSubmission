import { Container } from '@mui/material'
import AppBar from '~/components/AppBar'
import Footer from '~/components/Footer'
import ProfileBar from '~/pages/Profiles/ProfileBar'
import ProfileContent from '~/pages/Profiles/ProfileContent'

function Profile() {
  return (
    <Container disableGutters maxWidth={false}>
      <ProfileBar />
      <ProfileContent />
    </Container>
  )
}

export default Profile
