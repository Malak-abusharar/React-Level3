import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";

const AllTasksSection = ({ user }) => {
  const [value, loading, error] = useCollection(collection(db, user.uid));
  if (loading) {
    return (
      <main className="load">
        <p>Loading.....</p>
      </main>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error</p>
      </div>
    );
  }
  if(value){
  return (
    <section className="all-task flex mtt">
    {value.docs.map((item) => {
      return(
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
      )
    }
    )}
    </section>
  );
  }
};

export default AllTasksSection;