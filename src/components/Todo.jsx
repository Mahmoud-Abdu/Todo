import React, { useState } from "react";
import TodosList from "./TodosList";
import ArchiveList from "./ArchiveList";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [archTodos, setArchTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    checked: false,
    createdAt: "",
    finishedAt: "",
    archivedAt: "",
  });
  const [isDialogOpen, setDialogOpen] = useState(false);

  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setNewTodo({
      ...newTodo,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddTodo = () => {
    const setTime = { ...newTodo };
    setTime.createdAt = new Date().toLocaleString();

    setTodos([...todos, setTime]);
    setNewTodo({
      title: "",
      description: "",
      checked: false,
      createdAt: "",
      finishedAt: "",
      archivedAt: "",
    });
  };

  const handleEditTodo = (index, updatedTodo) => {
    const updatedTodos = [...todos];
    updatedTodo.finishedAt = new Date().toLocaleString();
    updatedTodos[index] = updatedTodo;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleArchiveTodo = (index) => {
    const todosCopy = [...todos];
    const archivedTodo = todosCopy[index];
    archivedTodo.archivedAt = new Date().toLocaleString();
    setArchTodos([...archTodos, archivedTodo]);
    handleDeleteTodo(index);
    console.log(archivedTodo);
  };

  const handleRetriveTodo =(index) => {
    const archivedTodosCopy = [...archTodos];
    const retrivedTodo = archivedTodosCopy[index];
    setTodos([...todos, retrivedTodo]);
    const archsAfterRetrived = archTodos.filter((_, i) => i !== index);
    setArchTodos(archsAfterRetrived);
  }

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Todo App
      </Typography>

      <Stack spacing={2} direction="row">
        <TextField
          label="Title"
          name="title"
          value={newTodo.title}
          onChange={handleInputChange}
        />
        <TextField
          label="Description"
          name="description"
          value={newTodo.description}
          onChange={handleInputChange}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={newTodo.checked}
              onChange={(e) =>
                setNewTodo({
                  ...newTodo,
                  checked: e.target.checked,
                })
              }
            />
          }
          label="Checked"
        />
        <Button variant="outlined" color="success" onClick={handleAddTodo}>
          Add Todo
        </Button>
      </Stack>

      <TodosList
        todos={todos}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleArchiveTodo={handleArchiveTodo}
      />

      <ArchiveList archTodos={archTodos} retrive={handleRetriveTodo} />

      <Box mt={5}>
        <Button onClick={() => navigate("/weather")}>Current Weather</Button>
      </Box>
    </Box>
  );
};

export default Todo;
