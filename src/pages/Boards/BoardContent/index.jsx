import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '~/context/AuthContext'
import { get } from '~/utils/request'

function BoardContent() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      if (!username || !password) {
        toast.error('Please enter your username and password')
        return
      }

      const data = { username, password }
      const response = await get('users', data)

      if (!response) {
        toast.error('Invalid username or password')
        return
      }

      login(response)
      toast.success('Login successful')
      navigate('/product')
    } catch (error) {
      toast.error('Login failed')
    }
  }

  return (
    <Container fluid className='py-5'>
      <Row sm md='auto'>
        <Col md={7}>
          <img className="img-fluid" style={{ minHeight: '90vh' }} src="imgs/login.jpg" />
        </Col>
        <Col md={5} style={{ padding: '5rem', paddingTop: '8rem', paddingBottom: '8rem' }}>
          <Form className="w-75">
            <Form.Group className=" d-flex flex-column" controlId="name">
              <h1
                style={{ fontSize: '36px', fontFamily: 'Inter', letterSpacing: '1.7px' }}
                className="mb-4 fw-semibold"
              >
                Log in to Exclusive
              </h1>
            </Form.Group>
            <Form.Group className=" d-flex flex-column" controlId="name">
              <h1
                style={{ fontSize: '16px', fontFamily: 'Poppins' }}
                className="mb-4 fw-normal"
              >
                Enter your details below
              </h1>
            </Form.Group>

            <Form.Group controlId="userName" className='pb-3'>
              <Form.Control
                className='fw-light ps-0 border-0 border-5 border-bottom border-light-subtle shadow-none'
                type="text"
                placeholder='Email or Phone Number'
                name="userName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password" className="mt-3 pb-3">
              <Form.Control
                className='fw-light ps-0 border-0 border-5 border-bottom border-light-subtle shadow-none'
                type="password"
                placeholder='Password'
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Row className='d-flex justify-content-between align-content-center'>
              <Col>
                <Button
                  variant="danger"
                  className="fw-bold mt-4 w-75"
                  onClick={handleLogin}
                >
                  Log in
                </Button>
              </Col>
              <Col>
                <Button
                  variant=""
                  className="text-danger mt-4 w-100"
                >
                  Forgot password?
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default BoardContent
