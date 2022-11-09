import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Container } from "react-bootstrap"
import Navbar from "../FirstPage/Navbar"

export default function Login() {
  const [show, setshow] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handelshow=() =>{
    setshow(!show)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
    <Navbar />
    <div className='Signupback'>
        <Container
          className="d-flex align-items-center justify-content-center  "
          style={{ minHeight: "100vh" }}
        >
    <div className="w-100  " style={{ maxWidth: "400px" }}>
      <Card  id='cardblk'>
        <Card.Body className="Signupform">
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" className="inputtt" placeholder='example@example.com' ref={emailRef} required />
            </Form.Group>
            <div className="passco">
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <label id="passwordvisi" onClick={handelshow}>{show? 'Hide' : 'show'}</label>
              <Form.Control type={show? 'text' : 'password'}className="inputtt" placeholder='your password' ref={passwordRef} required />
            </Form.Group>
            </div>
            
            <Button disabled={loading} type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 tet">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      </div>
        </Container>
      </div>
    </>
  )
}
