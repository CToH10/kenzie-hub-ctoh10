import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../../components/Button";
import { TechCard } from "../../components/Tech";
import { api } from "../../services/api";
import { HiOutlinePlus } from "react-icons/hi";
import { ButtonHeader, ModalHeader } from "../../components/Header";
import { StyledModal } from "../../components/Modal/style";
import { NewTech } from "../../components/Form/NewTech/NewTech";
import { DashMain, StyledList } from "./style";

export function DashPage() {
  const localUser = JSON.parse(window.localStorage.getItem("userID"));
  const token = JSON.parse(window.localStorage.getItem("token"));
  const [list, setList] = useState([]);
  const [user, setUser] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getInfo() {
      try {
        let info = await api.get(`/users/${localUser}`);

        setList(info.data.techs);
        setUser(info.data);
      } catch (err) {
        toast.error(err.response.data.message);
      }
    }

    getInfo();
  }, [localUser]);

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

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  function logOut() {
    setUser("");
    setList([]);
    window.localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      <ButtonHeader>
        <Button action={logOut} text={"Sair"} />
      </ButtonHeader>
      <DashMain>
        <section className="greetings">
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </section>
        <section className="techs">
          <h3>Tecnologias</h3>
          <Button text={<HiOutlinePlus color="white" />} action={toggleModal} />
        </section>
        <section className="listTechs">
          {list.length !== 0 && (
            <StyledList>
              {list.map((tech) => TechCard(tech, removeTech))}
            </StyledList>
          )}
          {list.length === 0 && <h2>Você não tem tecnologias cadastradas</h2>}
        </section>
      </DashMain>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <ModalHeader text="Cadastrar Tecnologia" />
        <NewTech
          token={token}
          action={toggleModal}
          newList={setList}
          id={localUser}
        />
      </StyledModal>
    </>
  );
}
