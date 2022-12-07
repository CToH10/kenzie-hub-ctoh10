import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TechCard } from "../../components/Tech";
import { HiOutlinePlus } from "react-icons/hi";
import { ButtonHeader, ModalHeader } from "../../components/Header";
import { StyledModal } from "../../components/Modal/style";
import { NewTech } from "../../components/Form/NewTech/NewTech";
import { DashMain, StyledList } from "./style";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { TechContext } from "../../Contexts/TechContext";
import { EditForm } from "../../components/Form/EditTech";

export function DashPage() {
  const { user } = useContext(UserContext);
  const { getInfo, list, removeTech, userInfo, logOut } =
    useContext(TechContext);
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    getInfo();
  }, []);

  function toggleModal(e, id, title) {
    setIsOpen(!isOpen);
    if (e === "open") {
      setEdit(true);
    } else {
      setEdit({ id: id, title: title });
    }
  }

  return (
    <>
      <ButtonHeader>
        <Button action={logOut} text={"Sair"} />
      </ButtonHeader>
      <DashMain>
        <section className="greetings">
          <h2>Olá, {userInfo.name}</h2>
          <p>{userInfo.course_module}</p>
        </section>
        <section className="techs">
          <h3>Tecnologias</h3>
          <Button
            text={<HiOutlinePlus color="white" />}
            action={() => toggleModal("open")}
          />
        </section>
        <section className="listTechs">
          {list.length !== 0 && (
            <StyledList>
              {list.map((tech) => TechCard(tech, removeTech, toggleModal))}
            </StyledList>
          )}
          {list.length === 0 && (
            <h2>Você não possui tecnologias cadastradas</h2>
          )}
        </section>
      </DashMain>

      {edit === true ? (
        <>
          <StyledModal
            isOpen={isOpen}
            onBackgroundClick={toggleModal}
            onEscapeKeydown={toggleModal}
          >
            <ModalHeader text="Cadastrar Tecnologia" />
            <NewTech action={toggleModal} />
          </StyledModal>
        </>
      ) : (
        <>
          <StyledModal
            isOpen={isOpen}
            onBackgroundClick={toggleModal}
            onEscapeKeydown={toggleModal}
          >
            <ModalHeader text="Editar Tecnologia" />
            <EditForm
              action={toggleModal}
              techID={edit.id}
              title={edit.title}
            />
          </StyledModal>
        </>
      )}
    </>
  );
}
