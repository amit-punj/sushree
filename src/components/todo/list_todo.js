import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Typography } from "@mui/material";
import React from "react";

import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

const Listtodo = (props) => {
  const todos = props.list;
  return (
    <>
      {console.log("list in return ", todos)}
      {todos.length > 0 ? (
        <TableContainer
          style={{ width: "60%", margin: "auto" }}
          component={Paper}
        >
          <Table sx={{ minWidth: 350 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Task</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todos.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{++index}</TableCell>
                    <TableCell>{item.text}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => props.EditTodo(item.id)}
                        variant="outlined"
                        endIcon={<EditIcon />}
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => props.DeleteTodo(item.id)}
                        variant="outlined"
                        endIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography mt={2} align="center" variant="h3">
          No Todo List
        </Typography>
      )}
    </>
  );
};

export default Listtodo;
