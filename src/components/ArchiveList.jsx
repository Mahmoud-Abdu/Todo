import {
    Box,
    TextField,
    Checkbox,
    FormControlLabel,
    Stack,
  } from "@mui/material";

const ArchiveList = ({archTodos}) => {
  return (
    archTodos.map((todo, index) => (
        <Box key={index} p={2} border={1} borderRadius={5} mt={2}>
          <Stack spacing={2} direction="row">
            <TextField
              disabled
              label="Title"
              name="title"
              value={todo.title}
           
            />
            <TextField
              disabled
              label="Description"
              name="description"
              value={todo.description}
           
            />
            <FormControlLabel
              control={
                <Checkbox
                  disabled
                  checked={todo.checked}
                />
              }
              label="Checked"
            />
          </Stack>
        </Box>
      ))
  )
}

export default ArchiveList