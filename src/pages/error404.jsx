import React from 'react';
import './error404.css'
const Error404 = () => {
  return (
    <div className='error-page'>
       <canvas id="canvas" 
// @ts-ignore
       hidden="" />
  <div className="center">
    <h1>404</h1>
    <p>PAGE NOT FOUND.</p>
  </div>
    </div>
  );
}

export default Error404;