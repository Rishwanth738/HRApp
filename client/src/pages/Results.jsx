import React from "react";
import ResultBox from "../components/ResultBox";

const Results = () => {
  
  const result = {
    score: 8.5,
    feedback: "Great code structure! Just improve comments and modularity.",
  };

  return (
    <div>
      <h2>Your Results</h2>
      <ResultBox score={result.score} feedback={result.feedback} />
    </div>
  );
};

export default Results;
