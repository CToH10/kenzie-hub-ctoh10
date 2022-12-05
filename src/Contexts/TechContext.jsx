import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const [list, setList] = useState([]);
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("userID"))
  );
  const [token, setToken] = useState(
    JSON.parse(window.localStorage.getItem("token"))
  );

  async function getInfo() {
    try {
      let info = await api.get(`/users/${user}`);
      setList(info.data.techs);
    } catch (err) {
      toast.err(err.response.data.message);
    }
  }

  async function removeTech(id) {
    const headers = {
      Authorization: `Bearer: ${token}`,
    };
    try {
      await api.delete(`/users/techs/${id}`, { headers });
      let newList = list.filter((tech) => tech.id !== id);
      toast.success("Tech excluída com sucesso");
      setList(newList);
    } catch (err) {
      toast.err(err.message);
    }
  }

  async function editTech(id, body) {
    const headers = {
      Authorization: `Bearer: ${token}`,
    };
    try {
      await api.put(`/users/techs/${id}`, { body }, { headers });
      toast.success("Tech editada com sucesso");
    } catch (err) {
      toast.err(err.message);
    }
  }

  return (
    <TechContext.Provider value={{ list, getInfo, removeTech, editTech }}>
      {children}
    </TechContext.Provider>
  );
}
