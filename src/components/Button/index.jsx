import React from "react";
import { HiTrash } from "react-icons/hi";

export function Button({ type = "submit", text, action }) {
  return (
    <button type={type} onClick={action}>
      {text ? text : <HiTrash color="white" />}
    </button>
  );
}
