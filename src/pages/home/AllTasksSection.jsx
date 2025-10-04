import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../firebase/config";
import Moment from "react-moment";

const AllTasksSection = ({ user }) => {
  // const [value, loading, error] =
  // useCollection(collection(db, user.uid));
  // const [order, setorder] = useState("asc");
  const allTasks = query(collection(db, user.uid), orderBy("complete", "asc"));
  const completedTasks = query(
    collection(db, user.uid),
    where("complete", "==", true)
  );
  const NotcompletedTasks = query(
    collection(db, user.uid),
    where("complete", "==", false)
  );
  const [iniatialData, setiniatialData] = useState(allTasks);
  const [value, loading, error] = useCollection(iniatialData);
  const [isFullOpacity, setisFullOpacity] = useState(false);
  const [selectValue, setselectValue] = useState("aa");

  if (loading) {
    return (
      <main className="load">
        <p>Loading.....</p>
      </main>
    );
  }
  if (error) {
    return <h1>Error</h1>;
  }

  if (value) {
    return (
      <div>
        {/* Option (fitered data) */}
        <section
          style={{ justifyContent: "center" }}
          className="parent-of-btns mtt flex "
        >
          {selectValue === "aa" && (
            <div>
              <button
                style={{ opacity: isFullOpacity ? "1" : "0.3" }}
                onClick={() => {
                  setisFullOpacity(true);
                  setiniatialData(
                    query(collection(db, user.uid), orderBy("id", "desc"))
                  );
                }}
              >
                Newest First
              </button>
              <button
                style={{ opacity: isFullOpacity ? "0.3" : "1" }}
                onClick={() => {
                  setisFullOpacity(false);
                  setiniatialData(
                    query(collection(db, user.uid), orderBy("id", "asc"))
                  );
                }}
              >
                Oldest first
              </button>
            </div>
          )}
          <select
          style={{alignSelf:"flex-end"}}
            value={selectValue}
            onChange={(eo) => {
              if (eo.target.value === "aa") {
                setisFullOpacity(false);
                setselectValue("aa");
                setiniatialData(allTasks);
              } else if (eo.target.value === "bb") {
                setselectValue("bb");
                setiniatialData(completedTasks);
              } else if (eo.target.value === "cc") {
                setselectValue("cc");
                setiniatialData(NotcompletedTasks);
              }
            }}
          >
            <option value="aa">All tasks</option>
            <option value="bb">Completed</option>
            <option value="cc">Not Completed</option>
          </select>
        </section>
        <section className="all-task flex mtt">
          {value.docs.length === 0 && (
            <h1>Congratulation! you have completed your tasks ♥ </h1>
          )}
          {value.docs.map((item) => {
            return (
              <article key={item.data().id} dir="auto" className="one-task">
                <Link className="task-link" to={`/edit-task/${item.data().id}`}>
                  <h2>{item.data().title}</h2>
                  <ul>
                    {/* <li>Sub Task</li>
              <li>Sub Task</li> */}
                    {item.data().details.map((item, index) => {
                      if (index < 2) {
                        return <li key={item}>{item}</li>;
                      } else {
                        return false;
                      }
                    })}
                  </ul>
                  <p className="time">
                    <Moment className="pro" fromNow date={item.data().id} />
                  </p>
                </Link>
              </article>
            );
          })}
        </section>
      </div>
    );
  }
};

export default AllTasksSection;
