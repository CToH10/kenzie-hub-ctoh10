import React from "react";
import { HiTrash } from "react-icons/hi";
import { StyledButton } from "./style";

export function Button({ type = "submit", text, action, load }) {
  return (
    <StyledButton type={type} onClick={action} disabled={load}>
      {text ? text : <HiTrash color="white" />}
    </StyledButton>
  );
}
