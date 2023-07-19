import React, {useState} from "react";
import Home from "./home";
import Notes from "./Notes.jsx";

const todoList= ()=>{
  const {newTask,setNewTask}=useState('');
  const {list, setList}=useState ({});
  function addNewTask() {
		setList(list.concat(newTask));
}
      return (
        <div className="container">
            <h1>Task List for Deucalinos</h1>
              <div className="input">
              <input type="text"  onChange={e => setNewTask(e.target.value)} value={newTask} placeholder="What is missing to be done?"/>
              </div>
           
               <div className="buttonadd">
                <button type="submit" onClick={addNewTask}><i class="fa-solid fa-hexagon-plus"></i></button>
              </div>
              {list.map(l => (
				<Notes text={l} />
			))}
       </div>
      );
              };
  
export default TodoList;