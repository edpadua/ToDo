import { useState, useContext } from "react";

import { ListTaskContainer, List, TaskContainer } from "./styles";



import { TaskListContext } from "../../Contexts/Tasklist";

import Task from "../Task";

function ListTasks() {
  const { tasks } = useContext(TaskListContext);

  return (
    <ListTaskContainer>
      <List>
        {tasks.length > 0 &&
          tasks.map((task, index) => (
            <TaskContainer key={index}>
              <Task task={task} index={index}/>
            </TaskContainer>
          ))}
      </List>
    </ListTaskContainer>
  );
}

export default ListTasks;
