import React from "react";

import AddTask from "../AddTask";

import ListTasks from "../ListTasks";

import { ContentContainer, ContentTitle, TitleContainer } from "./styles";

function Content() {
  return (
    <ContentContainer>
      <TitleContainer>
        <ContentTitle>To Do List</ContentTitle>
      </TitleContainer>

      <ListTasks />
      <AddTask />
    </ContentContainer>
  );
}

export default Content;
