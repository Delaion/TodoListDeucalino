import React from "react";
const Notes=(props)=> {
    function deleteTodo (){

    }
    return(
        <div className="alert alert-info" role="alert">
          
          {props.text}  <button onClick={deleteTodo} className="btn btn-outline-danger" type="button" id="button-addon2">
                         <i class="fa-solid fa-trash-can"></i>
                        </button>         
        </div>
            )
        }

export default  Notes;