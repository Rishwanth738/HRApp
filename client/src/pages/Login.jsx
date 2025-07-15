import React, {useState} from "react";
import { TextField, Button, Typography, Box, Paper} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () =>{
    const [email,semail] = useState("");
    const [pw,spw] = useState("");
    const navigate = useNavigate();

    const handleLogin = async(e) =>{
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:5000/api/login",{email,pw});
            localStorage.setItem("token",res.data.token);
            navigate("/dashboard");

        }catch(err){
            alert("Login failed! Invalid credentials.");
        }
    };

    return(
        <Box 
        display="flex"
        justifyContent="center"
        alignItems = "center"
        minHeight = "100vh"
        sx={{backgroundColor: "#f1f1f1"}}
        >
            <Paper elevation={3} sx={{padding:4, width:400}}>
                <Typography variant = "h5" gutterBottom>
                    Login   
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField 
                    label="Email"
                    type="email"
                    fullWidth
                    required
                    margin="normal"
                    value={email}
                    onChange={(e)=>semail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="pw"
                        fullWidth
                        required
                        margin="normal"
                        value={pw}
                        onChange={(e)=>spw(e.target.value)}
                    />
                    <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} type="submit">
                    Login
                    </Button>

                </form>
            </Paper>
        </Box>
    );
};

export default Login;