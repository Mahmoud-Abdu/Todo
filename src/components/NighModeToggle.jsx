import { Box, Button, IconButton, Typography } from "@mui/material";
import { WiMoonWaxingCrescent3, WiMoonNew } from "react-icons/wi";

const NightModeToggle = ({ mode, toggleMode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        bgcolor: "background.default",
        color: "text.primary",
        borderColor: "text.primary",

       }}
    >
      <Typography sx={{p:2}}>
        Switch Mode
      </Typography>
      <IconButton sx={{ ml: 1 }} color="inherit" onClick={toggleMode}>
          {mode === "dark" ? <WiMoonNew /> : <WiMoonWaxingCrescent3 />} 

      </IconButton>
    </Box>
  );
};

export default NightModeToggle;
