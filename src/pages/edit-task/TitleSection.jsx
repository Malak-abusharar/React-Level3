import React from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../firebase/config";
import { doc} from "firebase/firestore";

export default function TitleSection({ user, stringId, titleInput }) {
  const [value, loading, error] = useDocument(doc(db, user.uid, stringId));
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
            onChange={async (eo) => {
            titleInput(eo)
            }}
            defaultValue={value.data().title}
            className="title-input center"
            type="text"
          />
          <i className="fa-regular fa-pen-to-square"></i>
        </h1>
      </section>
    );
  }
}
