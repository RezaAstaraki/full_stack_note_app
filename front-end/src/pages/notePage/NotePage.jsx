import React, { useEffect, useState } from "react";
import "./notePage.scss";
import { useParams, useNavigate } from "react-router-dom";

function NotePage() {
  const [note, setNote] = useState(null);
  let requestAddress;
  let requestMethod;

  const getNote = (id) => {
    if (id === "new") {
      return;
    }
    fetch(`http://127.0.0.1:8000/api/notes/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
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
  const navigate = useNavigate();

  let id = useParams().id;

  useEffect(() => {
    getNote(id);
  }, [id]);

  useEffect(() => {
    // console.log("note", note);
    // console.log("useParams(", param);
  });

  const updateNote = async () => {
    try {
      if (id === "new") {
        requestAddress = "http://127.0.0.1:8000/api/notes/add";
        requestMethod = "POST";
        console.log("requestMethod", requestMethod);
      } else {
        requestAddress = `http://127.0.0.1:8000/api/notes/${id}/update`;
        requestMethod = "PUT";
      }

      const response = await fetch(requestAddress, {
        method: requestMethod,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });

      if (!response.ok) {
        throw new Error("Failed to update note");
      }
    } catch (error) {
      console.error("Error updating note :", error);
    }
  };

  const backButtonHandler = async () => {
    await updateNote();
    navigate("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3 className="note-header">
          <svg
            onClick={() => backButtonHandler()}
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
      </div>

      <textarea
        defaultValue={note?.body}
        onChange={(e) => {
          setNote((prev) => ({ ...prev, body: e.target.value }));
        }}
      ></textarea>
    </div>
  );
}

export default NotePage;
