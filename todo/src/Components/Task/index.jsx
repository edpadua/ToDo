import React from "react";

import { useContext } from "react";

import { TaskListContext } from "../../Contexts/Tasklist";

import {
  TaskContainer,
  TaskData,
  TaskControl,
  TaskTitle,
  TaskDescription,
} from "./styles";

import { ButtonRemove, ButtonCheck } from "../../GlobalStyles/styles";

function Task({ task, index }) {
    const { taskDelete, taskMark } = useContext(TaskListContext); 
  return (
    <TaskContainer>
      <TaskData>
        <TaskTitle 	decoration={task.isDone?"line-through":"no-underline"}>{task.title}</TaskTitle>
        <TaskDescription>{task.description}</TaskDescription>
      </TaskData>
      <TaskControl>
        <ButtonCheck  onClick={() => taskMark(index)}>✓</ButtonCheck>
        <ButtonRemove onClick={() => taskDelete(index)}>X</ButtonRemove>
      </TaskControl>
    </TaskContainer>
  );
}

export default Task;
