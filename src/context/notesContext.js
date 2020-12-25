import React, { useState, useEffect, createContext } from "react";

export const NotesContext = createContext();

export const NotesProvider = (props) => {
  const [notes, setNotes] = useState([]);

  const getNotes = () => {
    let notesArry;
    if (sessionStorage.getItem("notes") != null) {
      notesArry = JSON.parse(sessionStorage.getItem("notes"));
    } else {
      notesArry = [];
    }
    return notesArry;
  };

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  function updateNotes() {
    setNotes(getNotes());
  }

  return (
    <NotesContext.Provider value={{ notes, setNotes, updateNotes }}>
      {props.children}
    </NotesContext.Provider>
  );
};
