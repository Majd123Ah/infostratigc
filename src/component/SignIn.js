



/*import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const SignIn = () => {


const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    function onChange(value) {
        console.log("Captcha value:", value);
        window.visiblebtn.style.visibility = "visible";
      }
      function validationslenght(value) {
        if (document.getElementById("pass").value.length > 8) {
          window.captha.style.visibility = "visible";
        } else {
        }
    
      }
    return (
        <div className='Signupback'>
            <div className='Signupform col-sm-4'>
                <h2>Create your account</h2>
                <form>
                    <label>your Email address </label>
                    <input type='Email' placeholder='example@example.com' required />
                    <label>your password </label>
                    <input type='password' placeholder='use a strong password' id="pass" onChange={validationslenght} required />
                    
                    <button type='submit' id='visiblebtn'>Sign In</button>
                    <a href='/signup'><h5>don't have an account yet?</h5></a>
                </form>
                <ReCAPTCHA id='captha'
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChange}
                    />
            </div>

        </div>
    )
}

export default SignIn
*/