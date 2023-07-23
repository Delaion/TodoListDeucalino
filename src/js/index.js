//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import TodoList from "./component/TodoList";
import Notes from "./component/Notes";


//render your react application
ReactDOM.render(
<Home/>


, document.querySelector("#app"));
