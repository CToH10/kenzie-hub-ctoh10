import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { LoginForm } from "../../components/Form/Login";
import { FormsMain } from "../../components/Form/style";

export function LoginPage() {
  return (
    <>
      <Header />
      <FormsMain>
        <h2>Login</h2>
        <LoginForm />
        <section className="noAccount">
          <p>Ainda não possui uma conta?</p>
          <Link to={"/register"}>Cadastre-se</Link>
        </section>
      </FormsMain>
    </>
  );
}
