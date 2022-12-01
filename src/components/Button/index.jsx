import React from "react";
import { HiTrash } from "react-icons/hi";

export function Button({ type = "submit", text, action, load }) {
  return (
    <button type={type} onClick={action} disabled={load}>
      {text ? text : <HiTrash color="white" />}
    </button>
  );
}
