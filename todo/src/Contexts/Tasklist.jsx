import { createContext, useState } from "react";

export const TaskListContext = createContext();
TaskListContext.displayName = "TaskList";

export default function TaskListProvider({ children }) {
    const [tasks, setTasks] = useState ([
        {
            title: "Atividade exemplo",
            description: "Lorem ipsum etc etc etc",
            isDone: false
        }]);
  
   
  
    const taskRegister = (task) => {
        console.log("tasks",tasks)
        const newTasks = [...tasks, { title:task.title, description:task.description, isDone:false }];
        newTasks.isDone=false;
        console.log("newTasks",newTasks)
        setTasks(newTasks);
    };


    const taskDelete = index => {
        
        const newTasks = [...tasks];
        newTasks.isDone=false;
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const taskMark = index => {
        
      const newTasks = [...tasks];
      if(newTasks[index].isDone == false){
      
        newTasks[index].isDone = true;
        setTasks(newTasks);
        
    }
      
  };


    

  
    const taskUpdate = (task, taskUpdated) => {
      console.log("Task Updated", taskUpdated);
      
    };
  
    const getTaskList = () => {
        return tasks
    };
  
    return (
      <TaskListContext.Provider
        value={{
            tasks,
            taskRegister,
            taskUpdate,
            taskDelete,
            taskMark,
            getTaskList,
        }}
      >
        {children}
      </TaskListContext.Provider>
    );
  }