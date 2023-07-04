import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
  Button
} from "@mui/material";

const ArchiveList = ({ archTodos, retrive }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom mt={4}>
        Archive:
      </Typography>
      <Box>
        {archTodos.map((todo, index) => (
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
                control={<Checkbox disabled checked={todo.checked} />}
                label="Checked"
              />
                   <Button
                variant="contained"
                color="success"
                onClick={() => retrive(index)}
               >
                Retrive
              </Button>
            </Stack>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ArchiveList;
