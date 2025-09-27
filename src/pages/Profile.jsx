import React from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import { Helmet} from 'react-helmet-async';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import Moment from 'react-moment';
import {deleteUser } from "firebase/auth";

const Profile = () => {
  
    const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user && !loading) {
      navigate("/");
    }
    if(!user.emailVerified){
        navigate("/");
    }
  });

const DeleteBTN = () => {
    deleteUser(user).then(() => {
  // User deleted.
  console.log("user deleted")
}).catch((error) => {
  // An error ocurred
  console.log(error.massege)
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
  if(user.emailVerified){
return (
    <div>
      <Helmet>
        <title>profile page</title>
      </Helmet>
      <Header />
      {/* <MainContent NamePage="JAVA SCRIPT" designer="malak" /> */}
      <main className="profile">
        <h6 className="pro">Email: {user.email}</h6>
        <h6 className="pro">UserName: {user.displayName}</h6>
        <h6 className="pro">Last Sign-in: <Moment className="pro" fromNow date={user.metadata.lastSignInTime} /></h6>
        <h6 className="pro">Account Creted: <Moment className="pro" ago fromNow date={user.metadata.creationTime} /> </h6>
        <button onClick={() => {
        DeleteBTN()
        }
        }
        className="delete">Delete account</button>
        
      </main>
      <Footer />
    </div>
  );
  }
}

   }



export default Profile;
