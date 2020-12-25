import React, { useState, useContext } from "react";
import { AppBar, Toolbar, Typography, Button, Modal } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CreateNote from "./../pages/createnote";
import { NotesContext } from "../context/notesContext";

const Header = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const { updateNotes } = useContext(NotesContext);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    updateNotes();
    setOpenModal(false);
  };

  return (
    <React.Fragment>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">Notes</Typography>
          <Button
            aria-label="delete"
            style={{ color: "#fff" }}
            onClick={handleOpenModal}
          >
            <AddIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <Modal
        open={openModal ? openModal : false}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="modal"
      >
        <div className="node-add-modal">
          <CreateNote onClose={handleClose}></CreateNote>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default Header;
