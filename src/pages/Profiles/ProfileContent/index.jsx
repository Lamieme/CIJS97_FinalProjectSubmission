import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'


const MOCK_SIDEBAR = [
  {
    key: 0,
    title: 'My Profile'
  },
  {
    key: 1,
    title: 'Address Book'
  },
  {
    key: 2,
    title: 'My Payment Options'
  }
]

const MOCK_SIDEBAR_MYORDERS = [
  {
    key: 0,
    title: 'My Returns'
  },
  {
    key: 0,
    title: 'My Cancellations'
  }
]

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper
}))

function ProfileContent() {
  const [dense, setDense] = React.useState(false)
  const [secondary, setSecondary] = React.useState(false)

  return (
    <Container maxWidth='xl' sx={{
      display: 'flex'
    }}>
      <Box sx={{ width: '30vw' }}>
        <Grid container spacing={1}>
          <Grid item xs md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Manage My Account
            </Typography>
            <Demo>
              <List dense={dense} sx={{ ml: 3 }}>
                {MOCK_SIDEBAR.map((item) => (
                  <ListItem key={item.key}>
                    <ListItemText
                      primary={item.title}
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>
                ))}
              </List>
            </Demo>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              My Orders
            </Typography>
            <Demo>
              <List dense={dense} sx={{ ml: 3 }}>
                {MOCK_SIDEBAR_MYORDERS.map((item) => (
                  <ListItem key={item.key}>
                    <ListItemText
                      primary={item.title}
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>
                ))}
              </List>
            </Demo>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              My Wishlist
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        width={'70vw'}
        boxShadow={'1px 1px 10px 1px rgba(0,0,0,.2)'}
        px={20}
        py={12}
        display={'flex'}
        flexDirection={'column'}
        gap={5}
      >
        <Typography fontSize={20} color={'#db4444'} fontWeight={'medium'}>Edit Your Profile</Typography>
        <Form className="w-100">
          <Form.Group controlId="infomation" className='pb-3 d-flex flex-column gap-4'>
            <Row className='d-flex gap-3'>
              <Col>
                <Form.Label className='fw-medium'>First Name</Form.Label>
                <Form.Control
                  size='lg'
                  className='rounded-1 fs-6 bg-body-tertiary'
                  type="text"
                  placeholder='Enter First Name'
                  name="firstName"
                />
              </Col>
              <Col>
                <Form.Label className='fw-medium'>Last Name</Form.Label>
                <Form.Control
                  size='lg'
                  className='rounded-1 fs-6 bg-body-tertiary'
                  type="text"
                  placeholder='Enter Last Name'
                  name="lastName"
                />
              </Col>
            </Row>
            <Row className='d-flex gap-3'>
              <Col>
                <Form.Label className='fw-medium'>Email</Form.Label>
                <Form.Control
                  size='lg'
                  className='rounded-1 fs-6 bg-body-tertiary'
                  type="text"
                  placeholder='Enter Email'
                  name="email"
                />
              </Col>
              <Col>
                <Form.Label className='fw-medium'>Address</Form.Label>
                <Form.Control
                  size='lg'
                  className='rounded-1 fs-6 bg-body-tertiary'
                  type="text"
                  placeholder='Enter Address'
                  name="address"
                />
              </Col>
            </Row>
            <Col className='d-flex flex-column gap-3'>
              <Form.Label className='fw-medium'>Password Changes</Form.Label>
              <Form.Control
                size='lg'
                className='rounded-1 fs-6 bg-body-tertiary'
                type="password"
                placeholder='Current Password'
                name="currentPassword"
              />
              <Form.Control
                size='lg'
                className='rounded-1 fs-6 bg-body-tertiary'
                type="password"
                placeholder='New Password'
                name="newPassword"
              />
              <Form.Control
                size='lg'
                className='rounded-1 fs-6 bg-body-tertiary'
                type="password"
                placeholder='Confirm New Password'
                name="confirmNewPassword"
              />
            </Col>
          </Form.Group>
          <Row className='d-flex align-items-center float-end'>
            <Col md={3}>
              <Button
                variant=""
                className="mt-4 fw-medium"
              >
                Cancel
              </Button>
            </Col>
            <Col md={9}>
              <Button
                variant="danger"
                className="btn mt-4 ps-5 pe-5 pt-3 pb-3 rounded-1 w-100"
              >
                Save Changes
              </Button>
            </Col>
          </Row>
        </Form>
      </Box>


    </Container>
  )
}

export default ProfileContent
