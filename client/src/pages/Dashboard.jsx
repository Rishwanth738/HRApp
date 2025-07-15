import React from "react";
import TaskCard from "../components/TaskCard";

const Dashboard= ()=>{
     const tasks = [
    { id: 1, title: "Build a Todo App", description: "Using React", deadline: "2025-07-12" },
    { id: 2, title: "API Integration", description: "Use Axios to fetch data", deadline: "2025-07-14" },
  ];

  return(
    <div>
        <h2>Dashboard</h2>
        {tasks.map(task => (
            <TaskCard 
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            deadline={task.deadline}
            onSubmit={(id)=> console.log("Submit Task", id)}
            />
        ))}
    </div>
  );
};

export default Dashboard;