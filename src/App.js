import React from "react"
import Signup from "./component/SignUP&LogIn/Signup"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./component/Dshboard/Dashboard"
import Login from "./component/SignUP&LogIn/Login"
import PrivateRoute from "./component/SignUP&LogIn/PrivateRoute"
import ForgotPassword from "./component/SignUP&LogIn/ForgotPassword"
import Firstpage from "./component/Firstpage"
import PageNotFound from "./component/PageNotFound"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
function App() {
  return (
        <Router forceRefresh={true}>
          <AuthProvider>
            <Switch>
            <Route exact path="/" component={Firstpage} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path='*' component={PageNotFound} />
            </Switch>
          </AuthProvider>
        </Router>
  )
}

export default App





/*import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Firstpage from './component/Firstpage';
import SignUp from './component/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './component/SignIn';
import TestDiloge from './component/TestDiloge';
function App() {

  return (
    
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Firstpage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/diloge' element={<TestDiloge />} />
        </Routes>
      </BrowserRouter>

  );
}


export default App;*/
