import React,{useState} from "react";

const SubmissionForm = ({ onSubmit }) =>{
    const [file,sfile] = useState(null);
    const [text,stext] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit({file,text });
    };
    
    return (
        <form onSubmit = {handleSubmit} style={{margin:"1rem"}}>
            <textarea
            placeholder="Give your answer here"
            value = {text}
            onChange={(e)=>stext(e.target.value)}
            rows = {7}
            style = {{width: "100%"}}
            />
            <br />
            <input type="file" onChange={(e)=>sfile(e.target.files[0])}/>
            <br />
            <button type="submit">Submit Task</button>
        </form>
    );
};

export default SubmissionForm;