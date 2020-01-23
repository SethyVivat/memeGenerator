// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// function MyInfo() {
//   return (
//     <div>
//       <h1>AyceX</h1>
//       <p>I like playing games.</p>
//       <h5>These below are the sports that I like:</h5>
//       <ul>
//         <li>Hello World</li>
//         <li>This is a paragraph</li>
//         <li>This is a modified paragraph</li>
//       </ul>
//     </div>
//   );
// }

// ReactDOM.render(<MyInfo />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA 

// serviceWorker.unregister();

// list of imported components 
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import MainUI from "./components/MainUI"; // header main-content footer
import CheckBox from "./components/CheckBox"; // Todo List
import GetDate from "./components/GetDate" // show date(morning afternoon or night)
import GetProps from "./components/GetProps" // get properties UI
import GetJokes from "./components/GetJokes" // practive get property jokes
import Products from "./components/Products" // practice get productData
import ClassBasedPractice from "./components/ClassBasedPractice" // practice class-based components
import StatePractice from "./components/StatePractice"
import EventHandling from "./components/EventHandling"
import ChangingState from "./components/ChangingState"
import LifeCycle from "./components/LifeCycle"
import CondRender from "./components/CondRender" //conditional rendering
import Fetching from "./components/Fetching" // fetching data from an API
import FormReact from "./components/FormReact" // Form in react
import FormPractice from "./components/FormPractice" // Practice crating form in react
import App from "./components/App" // practice meme generator project
import "./index.css"; //


ReactDOM.render(<App />, document.getElementById("root"));