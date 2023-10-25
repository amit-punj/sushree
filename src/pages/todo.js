import React, {useState} from "react";
import Addtodo from "../components/todo/add_todo";
import Listtodo from "../components/todo/list_todo"
import { Container } from "@mui/material";

const Todo = () =>{
    const [list, setList] = useState([])
    const handleAddTodo = (todo) => {
        console.log('todo', todo)
        const id = list.length + 1;
        setList([...list, {
            id:id,
            text:todo
        }])
        console.log('list after update', list)
    }

    const DeleteTodo = (id) => {
        const updatedList = list.filter((item) => {
            return item.id !== id
        })
        console.log('updatedList', updatedList)
        setList(updatedList);
    }

    const EditTodo = (id) => {
        const todos = [...list]; 
        const editedTodo = prompt('Edit the todo:');
        if (editedTodo !== null && editedTodo.trim() !== '') {
            let updatedTodos = [...todos]
            updatedTodos[id].text = editedTodo
            setList(updatedTodos);
        }
        console.log('list', list)
    }

    return (
        <Container>
            <Addtodo handle={handleAddTodo}/>
            <Listtodo list={list} EditTodo={EditTodo} DeleteTodo={DeleteTodo}/>
        </Container>
    )
}

export default Todo;