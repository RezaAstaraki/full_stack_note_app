import React from "react";

function ListItem({ item }) {
  return (
    <div>
      <h3>{item.body}</h3>
    </div>
  );
}

export default ListItem;
