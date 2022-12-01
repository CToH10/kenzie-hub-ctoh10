import React from "react";
import { Button } from "../Button";

export function TechCard({ title, status, id }, remove) {
  return (
    <li key={id}>
      <h3>{title}</h3>
      <p>{status}</p>
      <Button action={() => remove(id)} />
    </li>
  );
}
