import React, { useContext } from "react";
import Note from "./note";
import { Grid } from "@material-ui/core";
import { NotesContext } from "../context/notesContext";

const Notes = () => {
  const { notes } = useContext(NotesContext);

  return (
    <Grid container direction="row" className="card-container">
      {notes.map((note) => {
        return <Note key={note.addedOn} data={note} />;
      })}
    </Grid>
  );
};

export default Notes;
