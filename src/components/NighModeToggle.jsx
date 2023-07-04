import { Box, Button, IconButton } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
 const NightModeToggle = ({ mode, toggleMode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderColor: "text.primary",
        border: "1px solid",
        borderRadius: 25,
        p: 2,
      }}
    >
      {mode} mode
      <IconButton sx={{ ml: 1 }} color="inherit" onClick={toggleMode} >
        <DarkModeIcon />
      </IconButton>
    </Box>
  );
};

export default NightModeToggle;
