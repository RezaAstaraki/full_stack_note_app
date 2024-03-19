import React from "react";
import "./add_note_button.scss";
import { Link } from "react-router-dom";

function AddNoteButton() {
  //   const fetchData = async () => {
  //     const response = await fetch("http://127.0.0.1:8000/api/notes/");

  //     const data = await response.json();

  //     const ss = data.map((item) => {
  //       return parseInt(item.id);
  //     });
  //     console.log("max", Math.max(...ss));
  //     return Math.max(...ss);
  //   };

  return (
    <>
      <Link to={"/notes/new"}>
        <div className="add_note_button">
          <span>+</span>
        </div>
      </Link>
    </>
  );
}

export default AddNoteButton;
