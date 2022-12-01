import React from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { ButtonHeader } from "../../components/Header";
import { RegisterForm } from "../../components/Form/Register";
import { FormsMain } from "../../components/Form/style";

export function RegisterPage() {
  const navigate = useNavigate();

  async function registerUser(apiBody) {
    try {
      let registerProcess = await api.post("/users", apiBody);

      if (registerProcess.status === 201) {
        toast.success("Usuário criado com sucesso");
        navigate("/login");
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  function onSubmit(data) {
    const { passwordConfirmation, ...apiBody } = data;
    registerUser(apiBody);
  }

  return (
    <>
      <ButtonHeader>
        <Link to={"/login"}>Voltar</Link>
      </ButtonHeader>
      <FormsMain>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa</p>
        <RegisterForm onSubmit={onSubmit} />
      </FormsMain>
    </>
  );
}
