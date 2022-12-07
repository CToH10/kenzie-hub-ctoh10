import React from "react";
import { Button } from "../Button";
import { HiPencil } from "react-icons/hi";

export function TechCard({ title, status, id }, remove, open) {
  return (
    <li key={id}>
      <h3>{title}</h3>
      <p>{status}</p>
      <section className="buttons">
        <Button
          id={id}
          action={(e) => open(e, id, title)}
          text={<HiPencil color="white" />}
        />
        <Button action={() => remove(id)} />
      </section>
    </li>
  );
}
