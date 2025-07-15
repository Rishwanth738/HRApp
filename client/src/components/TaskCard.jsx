import React from "react";
const TaskCard =({props,showSubmitBtn=true,onSubmit}) =>{
    const submitbtn = () =>{
        return onSubmit(props.id);
    }
    return(
         <div style={{ border: "1px solid #aaa", padding: "1rem", margin: "1rem", borderRadius: "8px" }}>
         <h3>{props.title}</h3>
         <p>{props.description}</p>
         <p><strong>Deadline:</strong>{new Date(props.deadline).toLocaleDateString()}</p>
         {showSubmitBtn && <button onClick={submitbtn}>Submit</button>}
         </div>
    );
};

export default TaskCard;