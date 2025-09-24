import React, { useState } from "react";
import Header from "../../comp/Header";
import Footer from "../../comp/Footer";
// import MainContent from '../comp/MainContent'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { sendEmailVerification } from "firebase/auth";
//level 3
import Model from "pages/shared/Model";
import "./home.css";
import { doc, setDoc } from "firebase/firestore";
const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  const sendAgain = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      console.log("Send a user a verification email");
    });
  };

  // Level 3
  const [showModel, setshowModel] = useState(false);
  const forgetPassword = (eo) => {
    eo.preventDefault();
    setshowModel(true);
  };
  const closeModel = () => {
    setshowModel(false);
  };
  if (loading) {
    return (
      <div>
        <Header />
        <main className="load">
          <p>Loading.....</p>
        </main>
        <Footer />
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
  if (!user) {
    return (
      <div>
        <Header />
        {/* {user &&   <MainContent NamePage="HOME" designer="malak"/>} */}

        <main>
          <p className="pls">
            Please{" "}
            <Link style={{ fontSize: "30px" }} to="/signin">
              sign in
            </Link>{" "}
            to continue <span>🧡</span>
          </p>
        </main>

        <Footer />
      </div>
    );
  }
  if (user) {
    if (!user.emailVerified) {
      return (
        <div>
          <Helmet>
            <title>Home page</title>
          </Helmet>
          <Header />
          <main>
            <p>
              welcome : {user.displayName} <span>🧡</span>
            </p>
            <p className="pro">Please verify your email to continue</p>
            <button
              onClick={() => {
                sendAgain();
              }}
              className="delete"
            >
              Send email
            </button>
          </main>
          <Footer />
        </div>
      );
    }
    if (user.emailVerified) {
      return (
        <div>
          <Helmet>
            <title>Home page</title>
          </Helmet>
          <Header />
          <main className="home">
            {/* Option (fitered data) */}
            <section className="parent-of-btns mtt flex ">
              <button>Oldest First</button>
              <button>Newest first</button>
              <select id="browers">
                <option value="aa">All tasks</option>
                <option value="aa">Completed</option>
                <option value="aa">Not Completed</option>
              </select>
            </section>
            {/* Show all task */}
            <section className="all-task flex mtt">
              <article dir="auto" className="one-task">
                <Link to="/edit-task">
                  <h2>New Task</h2>
                  <ul>
                    <li>Sub Task</li>
                    <li>Sub Task</li>
                  </ul>
                  <p className="time">a day ago</p>
                </Link>
              </article>
            </section>
            {/* Add new task */}
            <section className="mt add-task-btn">
              <button
                onClick={() => {
                  setshowModel(true);
                }}
              >
                Add New Task <i className="fas fa-plus"></i>
              </button>
            </section>
            {showModel && (
              <Model closeModel={closeModel}>
                <div className="task-modal">
                  <div className="task-modal-inner">
                    <input placeholder="Add title :" type="text" />

                    <div className="details-row flex">
                      <input placeholder="details:" type="text" />
                      <button
                        onClick={(eo) => {
                          eo.preventDefault();
                        }}
                        className="add-btn"
                      >
                        add
                      </button>
                    </div>

                    <button>Submit</button>
                  </div>
                </div>
              </Model>
            )}
          </main>

          <Footer />
        </div>
      );
    }
  }
};

export default Home;
