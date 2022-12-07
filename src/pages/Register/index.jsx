import React from "react";
import { Link } from "react-router-dom";
import { ButtonHeader } from "../../components/Header";
import { RegisterForm } from "../../components/Form/Register";
import { FormsMain } from "../../components/Form/style";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

export function RegisterPage() {
  const { registerUser } = useContext(UserContext);

  function onSubmit(data) {
    const { passwordConfirmation, ...apiBody } = data;
    registerUser(apiBody);
  }

  return (
    <>
      <ButtonHeader>
        <Link to={"/login"}>Login</Link>
      </ButtonHeader>
      <FormsMain>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa</p>
        <RegisterForm onSubmit={onSubmit} />
      </FormsMain>
    </>
  );
}
