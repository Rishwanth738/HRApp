import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../db.js";

export const register = async(req,res) => {
    const {name,email,password} = req.body;

    try{
        const hashedPw = await bcrypt.hash(password, 10);

        const userExists = await pool.query("SELECT * FROM users WHERE email = $1",[email]);

        if(userExists.rows.length>0) return res.status(400).json({message:"Email already in use"});

        const result = await pool.query(
            "INSERT INTO users (name,email,password) VALUES ($1, $2, $3) RETURNING *",
            [name,email,hashedPw]
        );

        res.status(201).json({message: "User registered", user: result.rows[0]});
    }
    catch(err){
        res.status(500).json({message: "Error Occured:",error: err});
    }
};

export const login = async (req,res)=>{
    const {email,password} = req.body;

    try{
        const userResult = await pool.query("SELECT * FROM users WHERE email = $1",[email]);

        if(userResult.rows.length == 0) return res.status(400).json({message:"User doesn't exist. Register First!"});

        const user = userResult.rows[0];

        const iscrct = await bcrypt.compare(password, user.password);
        if(!iscrct) return res.status(400).json({message:"Incorrect password! Please check again!"});

        const token = jwt.sign({id: user.id, email:user.email}, process.env.JWT_SECRET,{
            expiresIn: "1h",
        } );
        res.json({token, user:{id:user.id,name:user.name,email:user.email}});
    }catch(err){
        res.status(500).json({message:"Login failed with error:",error:err});
    }
    };

