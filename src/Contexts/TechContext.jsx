import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const [list, setList] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const token = JSON.parse(window.localStorage.getItem("token"));
  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();

  async function getInfo() {
    try {
      let info = await api.get(`/users/${user}`);
      setUserInfo(info.data);
      setList(info.data.techs);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  async function addTech(techBody) {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer: ${token}`,
      },
    };

    try {
      let addProcess = await api.post("/users/techs", techBody, headers);
      if (addProcess.status === 201) {
        getInfo();
        toast.success("Tecnologia adicionada");
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  async function removeTech(id) {
    const headers = {
      Authorization: `Bearer: ${token}`,
    };
    try {
      await api.delete(`/users/techs/${id}`, { headers });
      getInfo();
      toast.success("Tech excluída com sucesso");
    } catch (err) {
      toast.err(err.message);
    }
  }

  async function editTech(id, body) {
    const headers = {
      Authorization: `Bearer: ${token}`,
    };
    try {
      await api.put(`/users/techs/${id}`, body, { headers });
      getInfo();
      toast.success("Tech editada com sucesso");
    } catch (err) {
      toast.error(err.message);
    }
  }

  function logOut() {
    setList([]);
    setUser(false);
    window.localStorage.clear();
    navigate("/login");
  }

  return (
    <TechContext.Provider
      value={{
        list,
        getInfo,
        removeTech,
        editTech,
        userInfo,
        logOut,
        token,
        addTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
