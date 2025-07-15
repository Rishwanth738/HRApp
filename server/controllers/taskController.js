import pool from "../db.js";

export const createTask = async (req,res)=>{
    const {title, description, deadline, assignedTo} = req.body;

    try{
        const result = await pool.query(
            "INSERT INTO tasks (title,description,deadline,assigned_to) VALUES ($1,$2,$3,$4) RETURNING *",[title,description,deadline,assignedTo]
        );
        res.status(201).json(result.rows[0]);
    }catch(err){
        res.status(500).json({message:"Task creation failed with error:",error:err});
    }
};

export const getAssignedTasks = async(req,res)=>{
    const userId = req.user.id;

    try{
        const result = await pool.query("SELECT * FROM tasks WHERE assigned_to = $1",[userId]);
        res.json(result.rows);
    }catch(err){
        res.status(500),json({message:"Failed to get tasks with error:",error:err});
    }
};