import React, { useState } from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router";
import { updateProfile , sendEmailVerification} from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
const Signup = () => {
  let navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [userName, setuserName] = useState("");
  const [hasError, sethasError] = useState(false);
  const [firebaseError, setfirebaseError] = useState("");
const [user, loading, error] = useAuthState(auth);
//loading
//not sign-in
//sign-in without email verification
//sign-in with email verification
  
    useEffect(() => {
      if(user){
        if(user.emailVerified){
          navigate("/")
        }
      }
    }
  );

  const signUpBTN = (eo) => {
    
              eo.preventDefault();
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed up
                  const user = userCredential.user;
                          console.log(user);

                  console.log("doneeeee");
sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });
                  updateProfile(auth.currentUser, {
                    displayName: userName,
                  })
                    .then(() => {
                      // Profile updated!
                      navigate("/");
                    })
                    .catch((error) => {
                      // An error occurred
                      console.log(error.code);
                    });
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  // ..
                  console.log(errorMessage);
                  sethasError(true);
                  switch (errorCode) {
                    case "auth/invalid-email":
                      setfirebaseError("Wrong Email");
                      break;
                    case "auth/user-not-found":
                      setfirebaseError("Wrong Email");
                      break;
                    case "auth/missing-password":
                      setfirebaseError("Missing Password");
                      break;
                    case "auth/invalid-credential":
                      setfirebaseError("Wrong Email or Password");
                      break;
                    case "auth/too-many-requests":
                      setfirebaseError(
                        "Too many requests, please try again later"
                      );
                      break;
                    default:
                      setfirebaseError("Please check your email & password");
                      break;
                  }
                });
  }
  

  if (loading) {
    return (
      <div>
        <Header/>
        <main className="load">
          <p>Loading.....</p>
        </main>
        <Footer/>
        
      </div>
    );
  }
   if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if(user){
if(!user.emailVerified){
return(
    // <div>
    //     <Header/>
    //     <main className="load">
    //       <p>We send yoy an email to verify your account</p>
    //       <button className="delete">Send again</button>
    //     </main>
    //     <Footer/>
        
    //   </div>
    navigate("/")
)
}
}
if(!user){
  return (
    <div>
      <Helmet>
        <title>Sign up page</title>
      </Helmet>
      <Header />

      <main>
        <form>
          <p>
            Create a new account <span>🧡</span>
          </p>
          <input
            onChange={(eo) => {
              setemail(eo.target.value);
            }}
            required
            placeholder="E-mail:"
            type="email"
          />
          <input
            onChange={(eo) => {
              setuserName(eo.target.value);
            }}
            required
            placeholder="User Name:"
            type="text"
          />
          <input
            onChange={(eo) => {
              setpassword(eo.target.value);
            }}
            required
            placeholder="Password:"
            type="password"
          />
          <button
            onClick={(eo) => {
              signUpBTN(eo);
            }}
          >
            Sign up
          </button>
          <p className="account">
            Already have an account <Link to="/Signin">Sign in</Link>
          </p>
          {hasError && <p>{firebaseError}</p>}
        </form>
      </main>

      <Footer />
    </div>
  );
}


};

export default Signup;
