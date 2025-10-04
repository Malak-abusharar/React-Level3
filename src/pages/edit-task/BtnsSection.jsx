import React from "react";
// import { useCollection } from "react-firebase-hooks/firestore";
// import { collection } from "firebase/firestore";
// import { db } from "../../firebase/config";

export default function BtnsSection({ user, stringId, deleteBtn }) {
  // const [value, loading, error] = useCollection(collection(db, user.uid));
  return (
    <section className="center mt">
      <div>
        <button
          onClick={(eo) => {
            deleteBtn(eo);
          }}
          className="delete mtt"
        >
          Delete task
        </button>
      </div>
    </section>
  );
}
