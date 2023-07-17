import React, {useState} from "react";
import Home from "./home";

const TODOLIST({tasks, addTask, deleteTask }){
  const [task, setTask]= useState ('');
  const handleTaskChange= (e)=>{
    setTask(e.target.value);
  };
  const handleAddTask= ()=>{
     if (task.trim() !==('')){
      addTask(task);
      setTask ('');
     }
  };
  const handleDeleteTask= (index)=>{
    deleteTask(index);
  };
      return (
        <div>
            <h1>Task List for Deucalinos</h1>
            <input type="text" value={task} onChange={handleTaskChange} placeholder="What is missing to be done?"/>
            <button type="submit" onClick={handleAddTask}><i class="fa-solid fa-hexagon-plus"></i></button>
            <ul>
              {tasks.map ((task, index)=>(
                 <li key={index}>
                  {task}
                  <button onClick={()=>handleDeleteTask(index)}><i class="fa-solid fa-trash-can-list"></i></button>
                 </li>
                 
              ))}
               
            </ul>
        </div>
      );
}
export default TodoList;