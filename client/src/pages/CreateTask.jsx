import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import axios from "axios";

const CreateTask = () => {
  const [task, setTask] = useState({ title: "", description: "", deadline: "" });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/tasks", task);
    alert("Task created");
  };

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Paper sx={{ padding: 4, width: 500 }}>
        <Typography variant="h6" gutterBottom>Create a New Task</Typography>
        <form onSubmit={handleSubmit}>
          <TextField name="title" label="Title" fullWidth margin="normal" onChange={handleChange} />
          <TextField name="description" label="Description" fullWidth margin="normal" onChange={handleChange} />
          <TextField name="deadline" label="Deadline" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} onChange={handleChange} />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>Create</Button>
        </form>
      </Paper>
    </Box>
  );
};

export default CreateTask;
