import React from "react";
import "./edit-task.css";
import { Helmet } from "react-helmet-async";
import Header from "../../comp/Header";
import Footer from "../../comp/Footer";

const EditTask = () => {
  return (
    <div>
      <Helmet>
        <title>edit task page</title>
      </Helmet>
      <Header />
      <div className="edit-task">
        {/* Title */}
        <section className="title center">
          <h1>
            <input
              value={"Malak abu sharar"}
              className="title-input center"
              type="text"
            />
            <i className="fa-regular fa-pen-to-square"></i>
          </h1>
        </section>

        {/* Sub-tasks section */}
        <section className="sub-task mtt">
          <div className="parent-time">
            <p className="time">Created: 6 days ago</p>
            <div>
              <input id="checkbox" type="checkbox" />
              <label htmlFor="checkbox">Completed </label>
            </div>
          </div>

          <ul>
            <li className="card-task flex">
              <p> Sub taskk </p>
              <i className="fa-solid fa-trash"></i>
            </li>

            <li className="card-task flex">
              <p> Sub taskk </p>
              <i className="fa-solid fa-trash"></i>
            </li>
          </ul>
        </section>

        {/* Add-more BTN && Delete BTN */}

        <section className="center mtt">
          <button className="add-more-btn">
            Add more <i className="fa-solid fa-plus"></i>
          </button>

          <div>
            <button className="delete mtt">Delete task</button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EditTask;
