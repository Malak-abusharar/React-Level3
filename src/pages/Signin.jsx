import { useState } from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/config";
  import "./signin.css"
import { useNavigate } from "react-router";
const Signin = () => {
     let navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
    const [hasError, sethasError] = useState(false);
  const [firebaseError, setfirebaseError] = useState("");
  const [showSendEmail, setshowSendEmail] = useState(false);
    const [showform, setshowform] = useState("");
    const [resetpass, setresetpass] = useState("");
const signInBTN = (eo) => {
      eo.preventDefault();
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  // ...
                  console.log("doneeee");
                  navigate("/")
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorMessage);
                   sethasError(true)
                switch (errorCode) {
                  case "auth/invalid-email":
                    setfirebaseError("Wrong Email")
                    break;
                  case "auth/user-not-found":
                    setfirebaseError("Wrong Email")
                    break;
                  case "auth/missing-password":
                    setfirebaseError("Missing Password")
                    break;
                    case "auth/invalid-credential":
                      setfirebaseError("Wrong Email or Password")
                        break;
                  case "auth/too-many-requests":
                    setfirebaseError("Too many requests, please try again later")
                    break;
                  default:
                    setfirebaseError("Please check your email & password")
                    break;
                }
                });
}
const forgetPassword = (eo) => {
    eo.preventDefault()
        
        sendPasswordResetEmail(auth, resetpass)
  .then(() => {
    // Password reset email sent!
  setshowSendEmail(true)
  console.log("send email")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}


  return (
    <div>
      <Helmet>
        <title>Sign in page</title>
      </Helmet>
      <Header />

      <main>
        <form className={`forget-password ${showform}`}>
          <div onClick={() => {
            setshowform("")
          }
          }
          className="close">X </div>
<input onChange={(eo) => {
 setresetpass(eo.target.value)
}
}
 required placeholder="Email: " type="email"></input>
      <button onClick={(eo) => {
      forgetPassword(eo);

      }
      } >Reset password</button>
    {showSendEmail && <p className="check-email">Please check your email to reset password</p>}  
        </form>

        <form>
          <input
            onChange={(eo) => {
              setemail(eo.target.value);
            }}
            required
            type="email"
          />
          <input
            onChange={(eo) => {
              setpassword(eo.target.value);
            }}
            required
            type="password"
          />
          <button
            onClick={(eo) => {
          signInBTN(eo);
            }}
          >
            Sign in
          </button>
          <p className="account">
            Do not have account <Link to="/Signup">Sign up</Link>
          </p>
          <p onClick={() => {
            setshowform("show-forget-pass")
          }
          }
          className="forget-pass">reset password</p>
           {hasError && <p>{firebaseError}</p>}

        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Signin;
