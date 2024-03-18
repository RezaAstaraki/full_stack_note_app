import React, { useEffect, useState } from "react";
import "./notePage.scss";
import { useParams } from "react-router-dom";

function NotePage() {
  const [note, setNote] = useState(null);

  const getNote = (id) => {
    fetch(`http://127.0.0.1:8000/api/notes/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse the JSON response
        } else {
          throw response.error;
        }
      })
      .then((data) => {
        setNote(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  let id = useParams().id;

  useEffect(() => {
    getNote(id);
  }, [id]);

  return (
    <div className="notePage">
      <p>{note?.body}</p>
    </div>
  );
}

export default NotePage;
