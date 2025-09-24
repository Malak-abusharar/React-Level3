import React from 'react';
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { Helmet} from 'react-helmet-async';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
const About = () => {
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
     return(
    <div>
      <Helmet>
              <title>html page</title>
            </Helmet>
<Header/>
       {/* {user &&   <main>
      welcome : {user.displayName}
      </main>} */}
      <main>
      <p>welcome : {user.displayName} <span>🧡</span></p>
      </main>
<Footer/>
    </div>
  );}

}
}

export default About;
