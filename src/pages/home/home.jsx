import React, { useState } from "react";
import Header from "../../comp/Header";
import Footer from "../../comp/Footer";
// import MainContent from '../comp/MainContent'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase/config";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { sendEmailVerification } from "firebase/auth";
//level 3
import "./home.css";
import { doc, setDoc } from "firebase/firestore";
import HomeModel from "./HomeModel";
import AllTasksSection from "./AllTasksSection";
const Home = () => {
  // console.log(typeof(new Date().getTime()))

  const [user, loading, error] = useAuthState(auth);

  // console.log(user.uid);
  // console.log(user);
  const sendAgain = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      console.log("Send a user a verification email");
    });
  };

  // Level 3
  const [showModel, setshowModel] = useState(false);
  const [array, setarray] = useState([]);
  const [subTask, setsubTask] = useState("");
  const [taskTitle, settaskTitle] = useState("");
  const [showLoading, setshowLoading] = useState(false);
  const [showMessge, setshowMessge] = useState(false);

  //------------------
  //Function of model
  const addBTN = (eo) => {
    eo.preventDefault();
    if (!array.includes(subTask)) {
      array.push(subTask);
    }
    console.log(array);
    setsubTask("");
  };
  const closeModel = () => {
    setshowModel(false);
  };
  const titleInput = (eo) => {
    settaskTitle(eo.target.value);
  };

  const detailsInput = (eo) => {
    setsubTask(eo.target.value);
  };

  const submitBTN = async (eo) => {
    eo.preventDefault();
    setshowLoading(true);
    // console.log("waiting")
    // console.log("Connected project ID:", auth.app.options.projectId);
    const taskId = new Date().getTime();
    await setDoc(doc(db, user.uid, `${taskId}`), {
      title: taskTitle,
      details: array,
      id: taskId,
      complete: false,
    });
    // console.log("done")
    setshowLoading(false);
    settaskTitle("");
    setarray([]);
    setshowModel(false);
    setshowMessge(true);
    setTimeout(() => {
      setshowMessge(false);
    }, 3000);
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
            {/* Show all task */}
            <AllTasksSection user={user} />
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
              <HomeModel
                closeModel={closeModel}
                detailsInput={detailsInput}
                addBTN={addBTN}
                submitBTN={submitBTN}
                titleInput={titleInput}
                taskTitle={taskTitle}
                subTask={subTask}
                array={array}
                showLoading={showLoading}
              />
            )}
            <p
              style={{ right: showMessge ? "5vw" : "-100vw" }}
              className="task-messge"
            >
              Task added successfully
              <i className="fa-solid fa-circle-check"></i>
            </p>
          </main>

          <Footer />
        </div>
      );
    }
  }
};

export default Home;
