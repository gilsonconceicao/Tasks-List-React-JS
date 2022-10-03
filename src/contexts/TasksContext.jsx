import React, { useState } from "react";
import uuid from "react-uuid";
export const TasksContext = React.createContext([]);

export const TasksProviderContext = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const getTasksUser = (title, description) => {
        let tasksSaveUsers = new Array(); 

        if (localStorage.hasOwnProperty("tasksSaveUsers")) {
            tasksSaveUsers = JSON.parse(localStorage.getItem("tasksSaveUsers"))
        }

        tasksSaveUsers.push({
            id: uuid(),  
            title, 
            description,
            date: new Date().toLocaleDateString() 
        })

        localStorage.setItem("tasksSaveUsers", JSON.stringify(tasksSaveUsers)); 
        setTasks(tasksSaveUsers);
    }
 
    console.log(tasks) 

    return (
        <TasksContext.Provider value={{getTasksUser, setTasks}} >
            {children}
        </TasksContext.Provider>
    )
}

export const UseTasks = () => React.useContext(TasksContext); 