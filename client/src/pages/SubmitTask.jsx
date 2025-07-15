import React from "react";
import SubmissionForm from "../components/SubmissionForm";
import { useParams } from "react-router-dom";
import axios from "axios";

const SubmitTask = () => {
  const { taskId } = useParams();

  const handleSubmit = async ({ file, text }) => {
    const formData = new FormData();
    formData.append("taskId", taskId);
    formData.append("submissionText", text);
    if (file) formData.append("file", file);

    await axios.post("http://localhost:5000/api/submit", formData);
    alert("Submission sent!");
  };

  return (
    <div>
      <h2>Submit Task #{taskId}</h2>
      <SubmissionForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SubmitTask;
