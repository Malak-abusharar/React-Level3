import React, { useState } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../firebase/config";
import Moment from "react-moment";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
export default function SubTasksSection({
  user,
  stringId,
  completeCheckbox,
  trashIcon,
}) {
  const [value, loading, error] = useDocument(doc(db, user.uid, stringId));
  const [showAddNewTask, setshowAddNewTask] = useState(false);
  const [subTaskk, setsubTaskk] = useState("");
  if (loading) {
    return (
      <div>
        <main className="load">
          <p>Loading.....</p>
        </main>
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
  if (value) {
    return (
      <section className="sub-task mtt">
        <div className="parent-time">
          <p className="time">
            <Moment className="pro" fromNow date={value.data().id} />
          </p>
          <div>
            <input
              onChange={async (eo) => {
                completeCheckbox(eo);
              }}
              checked={value.data().complete}
              id="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox">Completed </label>
          </div>
        </div>

        <ul>
          {value.data().details.map((item) => {
            return (
              <li key={item} className="card-task flex">
                <p>{item}</p>
                <i
                  onClick={() => {
                    trashIcon(item);
                  }}
                  className="fa-solid fa-trash"
                ></i>
              </li>
            );
          })}
        </ul>
        {showAddNewTask && (
          <form style={{ flexDirection: "row" }} className="add-new-task flex">
            <input
              value={subTaskk}
              onChange={(eo) => {
                setsubTaskk(eo.target.value);
              }}
              className="add-task"
            />
            <button
              onClick={async (eo) => {
                eo.preventDefault();
                setsubTaskk("");
                await updateDoc(doc(db, user.uid, stringId), {
                  details: arrayUnion(subTaskk),
                });
              }}
              className="add"
            >
              Add
            </button>
            <button
              onClick={(eo) => {
                eo.preventDefault();
                setshowAddNewTask(false);
              }}
              className="cancel"
            >
              Cancle
            </button>
          </form>
        )}

        <div className="center mtt">
          <button
            onClick={() => {
              setshowAddNewTask(true);
            }}
            className="add-more-btn"
          >
            Add more <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </section>
    );
  }
}
