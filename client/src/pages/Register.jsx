import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper, MenuItem } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, sForm] = useState({ name: "", email: "", password: "", role: "APPLICANT" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    sForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/register", form);
    navigate("/login");
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper elevation={3} sx={{ padding: 4, width: 400 }}>
        <Typography variant="h5" gutterBottom>Register</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Name" name="name" fullWidth required margin="normal" onChange={handleChange} />
          <TextField label="Email" name="email" type="email" fullWidth required margin="normal" onChange={handleChange} />
          <TextField label="Password" name="password" type="password" fullWidth required margin="normal" onChange={handleChange} />
          <TextField
            select
            name="role"
            label="Role"
            fullWidth
            value={form.role}
            onChange={handleChange}
            margin="normal"
          >
            <MenuItem value="APPLICANT">Applicant</MenuItem>
            <MenuItem value="HR">HR</MenuItem>
          </TextField>
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Register</Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;
