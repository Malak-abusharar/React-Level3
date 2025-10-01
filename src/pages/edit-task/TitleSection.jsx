import React, { useRef } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../firebase/config";
// import { deleteField, updateDoc} from "firebase/firestore";
import { doc } from "firebase/firestore";

export default function TitleSection({ user, stringId, titleInput }) {
  const [value, loading, error] = useDocument(doc(db, user.uid, stringId));
  const inputElement = useRef(null);

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
      <section className="title center">
        <h1>
          <input
            style={{
              textDecoration: value.data().complete ? "line-through red" : null,
            }}
            ref={inputElement}
            onChange={async (eo) => {
              titleInput(eo);
            }}
            defaultValue={value.data().title}
            className="title-input center"
            type="text"
          />
          <i
            onClick={() => {
              inputElement.current.focus();
            }}
            className="fa-regular fa-pen-to-square"
          ></i>
        </h1>
        {/* <button onClick={async() => {
          await updateDoc(doc(db, user.uid, stringId), {
details: deleteField()
});

        }
        }
        className="delete">Delete Title</button> */}
      </section>
    );
  }
}
