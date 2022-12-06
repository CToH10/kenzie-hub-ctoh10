import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("userID"))
  );

  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("userID")));
  }, [user]);

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
        setUser(loginProcess.data.user.id);
        navigate("/dashboard");
      }
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setLoad(false);
    }
  }

  async function registerUser(apiBody) {
    setLoad(true);
    try {
      let registerProcess = await api.post("/users", apiBody);

      if (registerProcess.status === 201) {
        toast.success("Usuário criado com sucesso");
        navigate("/login");
      }
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setLoad(false);
    }
  }

  return (
    <UserContext.Provider
      value={{ user, setUser, loginUser, load, registerUser }}
    >
      {children}
    </UserContext.Provider>
  );
}
