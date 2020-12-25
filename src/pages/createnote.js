import React, { useReducer } from "react";
import TextField from "@material-ui/core/TextField";
import { FormControl, Grid, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

const noteReducer = (state, action) => {
  switch (action.type) {
    case "input": {
      return {
        ...state,
        [action.inputName]: action.inputValue,
      };
    }
    case "save": {
      return {
        ...state,
        title: "",
        description: "",
      };
    }
    default:
      break;
  }
  return state;
};

const initialState = {
  title: "",
  description: "",
};

const CreateNote = (props) => {
  const [state, dispatch] = useReducer(noteReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "input",
      inputName: e.target.name,
      inputValue: e.target.value,
    });
  };

  const handleSave = () => {
    let notes = getNotes();
    setNotes(notes);
    dispatch({ type: "save" });
    onClose();
  };

  const onClose = () => {
    props.onClose();
  };

  const getNotes = () => {
    let notes;
    if (sessionStorage.getItem("notes") != null) {
      notes = JSON.parse(sessionStorage.getItem("notes"));
    } else {
      notes = [];
    }
    return notes;
  };

  const setNotes = (notes) => {
    notes.push({
      title: state.title,
      description: state.description,
      addedOn: Date.now(),
    });
    sessionStorage.setItem("notes", JSON.stringify(notes));
  };

  const { title, description } = state;
  return (
    <React.Fragment>
      <form noValidate autoComplete="off">
        <Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="txtNoteTitle"
                name="title"
                value={title}
                label="Title"
                variant="filled"
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <br />
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="txtNoteDescription"
                name="description"
                value={description}
                label="Discription"
                variant="filled"
                multiline
                rows={3}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <br />
          <Grid item xs={12}>
            <FormControl>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<SaveIcon />}
                onClick={handleSave}
              >
                Save
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default CreateNote;
