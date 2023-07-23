import React from "react";
import TodoList from "./TodoList.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<form className="inputs">
			<h1>Deucalinos weird to Dos</h1>
			<div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>

		</form>
	);
	console.log(Home);
};

export default Home;
