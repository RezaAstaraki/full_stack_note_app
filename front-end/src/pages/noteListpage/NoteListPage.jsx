import ListItem from "../../components/listItem/ListItem";
import "./noteListPage.scss";

import React, { useState, useEffect } from "react";

function NoteListPage() {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/notes/");
    let data = await response.json();
    // console.log("data", data);
    setNotes(data);
  };

  useEffect(() => {
    getNotes();
    // console.log("notes", notes);
  }, []);

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes.map((note) => (
          <ListItem item={note} key={note.id} />
        ))}
      </div>
    </div>
  );
}

export default NoteListPage;
