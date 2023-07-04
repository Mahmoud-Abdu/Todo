import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
const Info = ({ todo }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Todo info</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle id="dialog-title">Todo Info.</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Title: {todo.title}
          </DialogContentText>
          <DialogContentText id="dialog-description">
            Description: {todo.description}
          </DialogContentText>
          <DialogContentText id="dialog-description">
            Created At: {todo.createdAt}
          </DialogContentText>
          <DialogContentText id="dialog-description">
            Finished At: {todo.finishedAt}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
           <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Info;
