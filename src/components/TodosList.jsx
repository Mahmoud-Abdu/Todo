import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography
} from "@mui/material";
import Info from "./TodoInfo";

const TodosList = ({
  todos,
  handleEditTodo,
  handleDeleteTodo,
  handleArchiveTodo,
}) => {
  return (
    <>
      <Typography variant="h6" gutterBottom mt={4}>
        Todos:
      </Typography>
      <Box>
        {todos.map((todo, index) => (
          <Box key={index} p={2} border={1} borderRadius={5} mt={2}>
            <Stack spacing={2} direction="row">
              <TextField
                label="Title"
                name="title"
                value={todo.title}
                onChange={(e) =>
                  handleEditTodo(index, { ...todo, title: e.target.value })
                }
              />
              <TextField
                label="Description"
                name="description"
                value={todo.description}
                onChange={(e) =>
                  handleEditTodo(index, {
                    ...todo,
                    description: e.target.value,
                  })
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={todo.checked}
                    onChange={(e) =>
                      handleEditTodo(index, {
                        ...todo,
                        checked: e.target.checked,
                      })
                    }
                  />
                }
                label="Checked"
              />
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleDeleteTodo(index)}
              >
                Delete
              </Button>

              <Button
                variant="outlined"
                onClick={() => handleArchiveTodo(index)}
              >
                Archive
              </Button>

              <Info todo={todo} />
            </Stack>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default TodosList;
