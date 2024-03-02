import { useState, useContext } from "react";

import { Form, Input, TextAerea, Button, Error } from "../../GlobalStyles/styles";

import { AddTaskContainer, FormTitle } from "./styles";

import { TaskListContext } from "../../Contexts/Tasklist";

import { useForm, useController } from "react-hook-form";

function AddTask() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { taskRegister } = useContext(TaskListContext);

  const onSubmit = (data) => { 
   
    console.log("data",data);
    taskRegister(data);

    reset({
      title: "",
      description: "",
    });
  };

  return (
    <AddTaskContainer>
      
      <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>
         New Task
      </FormTitle>
        <Input
          {...register("title")}
          placeholder="Digite o título "
          type="text"
          name="title"
          {...register("title", {
            required: "Título é obrigatório",
          })}
        />
        {errors.title && <Error>{errors.title.message}</Error>}
        <TextAerea  rows="5"
          {...register("description")}
          placeholder="Digite a descrição "
          type="text"
          name="description"
          {...register("description", {
            required: "Descrição é obrigatória",
          })}
        />
        {errors.description && <Error>{errors.description.message}</Error>}
        <Button type="submit" >Adicionar</Button>
      </Form>
    </AddTaskContainer>
  );
}

export default AddTask;
