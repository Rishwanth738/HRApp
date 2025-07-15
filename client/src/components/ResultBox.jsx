import React from "react";

const ResultBox = ({score, feedback})=>{
    return (
        <div style={{ border: "1px solid green", padding: "1rem", margin: "1rem", background: "#eaffea" }}>
            <h3>AI Evaluated results:</h3>
            <p><strong>Score:</strong>{score}</p>
            <p><strong>Feedback:</strong>{feedback}</p>
        </div>
    );
};

export default ResultBox;