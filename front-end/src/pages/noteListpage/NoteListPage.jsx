import ListItem from "../../components/listItem/ListItem";
import "./noteListPage.scss";

import React, { useState, useEffect } from "react";

function NoteListPage() {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/notes/");
    let data = await response.json();
    console.log("data", data);
    setNotes(data);
  };

  useEffect(() => {
    getNotes();
    console.log("notes", notes);
  }, []);

  return (
    <div className="noteListPage">
      {notes.map((note) => (
        <ListItem item={note} key={note.id} />
      ))}
    </div>
  );
}

export default NoteListPage;
