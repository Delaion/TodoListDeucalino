import React from "react";
import TodoList from "./TodoList.jsx";
import Notes from "./Notes.jsx";
//include images into your bundle

//create your first component

const Home = () => {
     const [newTodo, setNewtodo]=useState (" ");
	 const [list, setList]= useState (["Verify I´m awake after alarm","Brush my teeth", "Say Hello to the dogs","Forget to say hello to boars when I get out home" ]);
	function addNewTodo(){
		setList(list.concat(newTodo));
		console.log(list);
	}
	return (
		<div className="inputs">
			<h1>Deucalinos weird to Dos</h1>
			<div className="input-group mb-3">
              <input onChange={e=>setNewtodo (e.target.value)} value ={newTodo} type="text" className="form-control" placeholder="Write here your To Do" aria-label="Recipient's username" aria-describedby="button-addon2"/>
              <button onClick={addNewTodo} className="btn btn-outline-success" type="button" id="button-addon2">
			  <i className="fa-solid fa-calendar-plus"></i>
			  </button>
            </div>
        
		 {list.map(l=>(
			<Notes text={l}/>
		 ))}
		</div>
	);

};

export default Home;
