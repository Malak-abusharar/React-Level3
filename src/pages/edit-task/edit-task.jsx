import React from "react";
import "./edit-task.css";
import { Helmet } from "react-helmet-async";
import Header from "../../comp/Header";
import Footer from "../../comp/Footer";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import TitleSection from "./TitleSection";
import SubTasksSection from "./SubTasksSection";
import BtnsSection from "./BtnsSection";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";

const EditTask = () => {
  const [user, loading, error] = useAuthState(auth);
  let { stringId } = useParams();
  // console.log(typeof(id))
  ////////////////
  //1- Title function
  const titleInput = async (eo) => {
    await updateDoc(doc(db, user.uid, stringId), {
      title: eo.target.value,
    });
  };
  ////////////////
  //2- sub task function
  const completeCheckbox = async (eo) => {
    if (eo.target.checked) {
      await updateDoc(doc(db, user.uid, stringId), {
        complete: true,
      });
    } else {
      await updateDoc(doc(db, user.uid, stringId), {
        complete: false,
      });
    }
  };
  const trashIcon = async (item) => {
    await updateDoc(doc(db, user.uid, stringId), {
      details: arrayRemove(item),
    });
  };
  ////////////////
  //3- button function
  const addBtn = (eo) => {};
  const deleteBtn = (eo) => {};

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
        <p>Error</p>
      </div>
    );
  }
  if (user) {
    return (
      <div>
        <Helmet>
          <title>edit task page</title>
        </Helmet>
        <Header />
        <div className="edit-task">
          {/* Title */}
          <TitleSection
            user={user}
            stringId={stringId}
            titleInput={titleInput}
          />

          {/* Sub-tasks section */}
          <SubTasksSection
            user={user}
            stringId={stringId}
            completeCheckbox={completeCheckbox}
            trashIcon={trashIcon}
          />

          {/* Add-more BTN && Delete BTN */}
          <BtnsSection user={user} stringId={stringId} />
        </div>

        <Footer />
      </div>
    );
  }
};

export default EditTask;
