import React from "react";
import TaskCard from "../components/TaskCard";
import {useNavigate} from "react-router-dom";

const AssignedTasks = ()=>{
    const navigate = useNavigate();

    const tasks = [
    { id: 101, title: "Portfolio Site", description: "Make it spicy 🔥", deadline: "2025-07-15" },
  ];

    return(
        <div>
            <h2>My Tasks:</h2>
            {tasks.map(task=>(
                <TaskCard
                key = {task.id}
                id = {task.id}
                title = {task.title}
                description = {task.description}
                deadline = {task.deadline}
                onSubmit={(id) => navigate(`/submit/${id}`)}
                />

            ))}
        </div>
    );
};

export default AssignedTasks;