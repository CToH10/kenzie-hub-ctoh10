import React from "react";
import { Button } from "../Button";
import { EditForm } from "../Form/EditTech";

export function TechCard({ title, status, id }, remove) {
  return (
    <li key={id} onClick={() => EditForm({ title, status, id })}>
      <h3>{title}</h3>
      <p>{status}</p>
      <Button action={() => remove(id)} />
    </li>
  );
}
