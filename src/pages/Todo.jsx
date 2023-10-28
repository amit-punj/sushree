import React, { useState } from "react";
import Addtodo from "../components/todo/add_todo";
import Listtodo from "../components/todo/list_todo";
import { Container } from "@mui/material";

const Todo = () => {
  const [list, setList] = useState([]);
  const handleAddTodo = (todo) => {
    console.log("todo", todo);
    const id = list.length + 1;
    setList([
      ...list,
      {
        id: id,
        text: todo,
      },
    ]);
    console.log("list after update", list);
  };

  const DeleteTodo = (id) => {
    const updatedList = list.filter((item) => {
      return item.id !== id;
    });
    console.log("updatedList", updatedList);
    setList(updatedList);
  };

  const EditTodo = (id) => {
    console.log("id.", id);
    // const todos = [...list];
    // console.log("todos.", todos);
    const editedTodo = prompt("Edit the todo:");
    console.log("editedTodo.", editedTodo);
    if (editedTodo !== null && editedTodo.trim() !== "") {
      const updatedTodos = list.map((item) => {
        console.log("item in map", item);
        if (item.id === id) {
          return {
            id: id,
            text: editedTodo,
          };
        } else {
          return item;
        }
      });
      //   let updatedTodos = [...list];
      console.log("updatedTodos.", updatedTodos);
      //   console.log("updatedTodos id", updatedTodos[id]);
      //   updatedTodos[id].text = editedTodo;
      //   console.log("updatedTodos.", updatedTodos);
      setList(updatedTodos);
    }
    console.log("list", list);
  };

  return (
    <Container>
      <Addtodo handle={handleAddTodo} />
      <Listtodo list={list} EditTodo={EditTodo} DeleteTodo={DeleteTodo} />
    </Container>
  );
};

export default Todo;
