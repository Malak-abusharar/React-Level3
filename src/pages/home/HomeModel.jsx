import Model from 'pages/shared/Model';
import React from 'react';

const HomeModel = ({titleInput, detailsInput, addBTN, submitBTN,
   closeModel, taskTitle, subTask, array, showLoading}) => {
  return (
    <Model closeModel={closeModel}>
                <div className="task-modal">
                  <div className="task-modal-inner">
                    <input
                      value={taskTitle}
                      onChange={(eo) => {
                        titleInput(eo);
                      }}
                      placeholder="Add title :"
                      type="text"
                    />

                    <div className="details-row flex">
                      <input
                        onChange={(eo) => {
                          detailsInput(eo);
                        }}
                        placeholder="details:"
                        type="text"
                        value={subTask}
                      />
                      <button
                        onClick={(eo) => {
                          addBTN(eo);
                        }}
                        className="add-btn"
                      >
                        add
                      </button>
                    </div>
                    <ul>
                      {array.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {/* <ul>
                      <li>js</li>
                      <li>react</li>
                    </ul> */}
                    <button
                      onClick={async (eo) => {
                        submitBTN(eo);
                      }}
                    >
                      {/* Submit */}
                      {showLoading ? (
                        <div className="my-spinner"></div>
                      ) : (
                        "submit"
                      )}
                    </button>
                  </div>
                </div>
              </Model>
  );
}

export default HomeModel;
