import React from 'react';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { Link } from 'react-router-dom';
import { db } from '../../firebase/config';
import Moment from 'react-moment';

const AllTasksSection = ({user}) => {
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
      <h1>Error</h1>
    );
  }

  if(value){
  return (
    <section className="all-task flex mtt">
    {value.docs.map((item) => {
      return(
          <article key={item.data().id} dir="auto" className="one-task">
        <Link to={`/edit-task/${item.data().id}`}>
          <h2>{item.data().title}</h2>
          <ul>
            {/* <li>Sub Task</li>
            <li>Sub Task</li> */}
            {item.data().details.map((item,index) => {
              if(index < 2){
              return(
                <li key={item}>{item}</li> 
              )
            }else{
              return false
            }
            }
            )}
          </ul>
          <p className="time"><Moment className="pro" fromNow date={item.data().id} /></p>
        
        </Link>
      </article>
      )
    }
    )}
    </section>
  );
}
}

export default AllTasksSection;