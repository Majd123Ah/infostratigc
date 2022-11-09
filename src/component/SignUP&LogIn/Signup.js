import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Container } from "react-bootstrap"
import Navbar from "../FirstPage/Navbar"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

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
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="inputtt" placeholder='use a strong password' type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control className="inputtt" placeholder='repeat password' type="password" ref={passwordConfirmRef} required />
                  </Form.Group>
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





/*import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";

const SignUp = () => {
  const [eror1, seteror1] = useState('')

  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  const Signuphendler = () => {

    createUserWithEmailAndPassword(auth, email, password, name)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });
  }
  function validations(value) {
    if (document.getElementById("pass").value !== document.getElementById("repass").value) {
      seteror1('password not match');
    } else {
      seteror1('')
      window.visiblebtn.style.visibility = "visible";
        if (document.getElementById("Name").value !== '' || document.getElementById("Email").value !== ''
          || document.getElementById("pass").value !== '' || document.getElementById("repass").value !== '') {
          window.visiblebtn.style.visibility = "visible";
        } else {
          window.visiblebtn.style.visibility = "hidden";
        }
      
    }
  }




  return (
    <div className='Signupback'>

      <div className='Signupform col-sm-4'>
        <h2>Create your account</h2>
        <form action="/signin">
          <label>your name </label>
          <input type='text' placeholder='Majd Ahmad' id="Name" onChange={(e) => setname(e.target.value)} required />
          <label>your Email address </label>
          <div>
            <input type='Email' placeholder='example@example.com' id="Email" onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <label>your password </label>
          <div>
            <input type='password' placeholder='use a strong password' id="pass" onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <label>Confirm password  </label>
          <input type='password' placeholder='repeat password' onChange={validations} id="repass"  required />
          <h6>{eror1}</h6>
          <a href='/signin'><h5>Already have an account?</h5></a>
          <button type="submit" id='visiblebtn' onClick={Signuphendler} >Sign Up</button>
        </form>

      </div>
    </div>
  )
}

export default SignUp*/
