import React from "react";

const Model = ({ closeModel }) => {
  return (
    <div className="parent-of-model">
      <form className={`model`}>
        <div
          onClick={() => {
            // setshowModel(false);
            closeModel();
          }}
          className="close"
        >
          X
        </div>
      </form>
    </div>
  );
};

export default Model;
// <input
//           onChange={(eo) => {
//             setresetpass(eo.target.value);
//           }}
//           required
//           placeholder="Email: "
//           type="email"
//         ></input>
//         <button
//           onClick={(eo) => {
//             forgetPassword(eo);
//           }}
//         >
//           Reset password
//         </button>
//         {showSendEmail && (
//           <p className="check-email">
//             Please check your email to reset password
//           </p>
//         )}