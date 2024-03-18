import React from "react";
import { Link } from "react-router-dom";

function ListItem({ item }) {
  return (
    <Link to={`${item.id}`}>
      <h3>{item.body}</h3>
    </Link>
  );
}

export default ListItem;
