import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Container } from "react-bootstrap"
import Navbar from "../FirstPage/Navbar"


export default function Signup() {

  const [show, setshow] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handelshow=() =>{
    setshow(!show)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
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
            <Card id='cardblk'>
              <Card.Body className="Signupform" >
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control className="inputtt" placeholder='example@example.com' type="email" ref={emailRef} required />
                  </Form.Group>
                  <div className="passco">
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <label id="passwordvisi" onClick={handelshow}>{show? 'Hide' : 'show'}</label>
                    <Form.Control className="inputtt" placeholder='use a strong password' type={show? 'text' : 'password'} ref={passwordRef} required />
                  </Form.Group>
                  </div>
                  <div className="passco">
                  <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <label id="passwordvisi" onClick={handelshow}>{show? 'Hide' : 'show'}</label>
                    <Form.Control className="inputtt" placeholder='repeat password' type={show? 'text' : 'password'} ref={passwordConfirmRef} required />
                  </Form.Group>
                  </div>
                  <Button disabled={loading}  type="submit">
                    Sign Up
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2 tet">
              Already have an account? <Link to="/login">Log In</Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}





