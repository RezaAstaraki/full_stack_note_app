import React from "react";
import { Link } from "react-router-dom";

function ListItem({ item }) {
  return (
    <Link to={`/notes/${item.id}`}>
      <div className="notes-list-item">
        <h3>{item.body}</h3>
      </div>
    </Link>
  );
}

export default ListItem;
