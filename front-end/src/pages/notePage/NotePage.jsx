import React, { useEffect, useState } from "react";
import "./notePage.scss";
import { Link, useParams } from "react-router-dom";
// import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";

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
    <div className="note">
      <div className="note-header">
        <Link to="/notes">
          <h3 className="note-header">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <title>chevron-left</title>
              <path d="M11 16l13-13v-3l-16 16 16 16v-3l-13-13z"></path>
            </svg>
          </h3>
        </Link>
      </div>

      <textarea defaultValue={note?.body}></textarea>
    </div>
  );
}

export default NotePage;
