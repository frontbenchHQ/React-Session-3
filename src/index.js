import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * 
 */

function updateDOM(count){

  console.log('updated');

  const element = (
    <div className="random"> 
        <p> {new Date().toLocaleTimeString()}  {count}</p>  
        <p> Fullstack camp </p>
        <p> React  </p>
    </div>
  );

  ReactDOM.render(element, document.getElementById('root'))
}

setInterval(updateDOM, 100);






// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
