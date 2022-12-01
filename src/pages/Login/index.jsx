import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { LoginForm } from "../../components/Form/Login";
import { FormsMain } from "../../components/Form/style";

export function LoginPage({ setUser }) {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);

  async function loginUser(body) {
    setLoad(true);
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
      if (loginProcess.data.token) {
        toast.success("Login realizado");
        setUser(true);
        return navigate("/dashboard");
      }
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setLoad(false);
    }
  }

  return (
    <>
      <Header />
      <FormsMain>
        <h2>Login</h2>
        <LoginForm loginUser={loginUser} load={load} />
        <section className="noAccount">
          <p>Ainda não possui uma conta?</p>
          <Link to={"/register"}>Cadastre-se</Link>
        </section>
      </FormsMain>
    </>
  );
}
