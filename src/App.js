import React from "react";
import "./App.css";
import Header from "./layouts/header";
import Notes from "./pages/notes";
import { NotesProvider } from "./context/notesContext";

const App = () => {
  return (
    <div className="container">
      <NotesProvider>
        <Header />
        <Notes />
      </NotesProvider>
    </div>
  );
};

export default App;
