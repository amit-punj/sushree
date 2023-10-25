import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Button  from "@mui/material/Button";
import { Stack } from "@mui/material";

const Addtodo = (props) =>{
    const [todo,Settodo] = useState('')
    const submit = () => {
        todo && props.handle(todo) 
        Settodo("")
    }
    return (
        <>
            {console.log('render')}
            <Stack justifyContent="center" mt={10} spacing={2} direction="row">
                <TextField 
                    name="todo" 
                    label="Add Todo list into list"
                    onChange={(e)=>Settodo(e.target.value)} 
                    value={todo}
                />
                <Button onClick={(submit)} variant="contained"> Add </Button>
            </Stack>
        </>
    )
}

export default React.memo(Addtodo);