import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { LoginForm } from "../../components/Form/Login";
import { FormsMain } from "../../components/Form/style";

export function LoginPage() {
  const navigate = useNavigate();

  async function loginUser(body) {
    try {
      let loginProcess = await api.post("/sessions", body);

      window.localStorage.setItem(
        "token",
        JSON.stringify(loginProcess.data.token)
      );
      window.localStorage.setItem(
        "userID",
        JSON.stringify(loginProcess.data.user.id)
      );
      // estado de usuário no app pra caso tenha redicionar pra dashboard
      if (loginProcess.data.token) {
        toast.success("Login realizado");
        return navigate("/dashboard");
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  return (
    <>
      <Header />
      <FormsMain>
        <h2>Login</h2>
        <LoginForm loginUser={loginUser} />
        <section className="noAccount">
          <p>Ainda não possui uma conta?</p>
          <Link to={"/register"}>Cadastre-se</Link>
        </section>
      </FormsMain>
    </>
  );
}
