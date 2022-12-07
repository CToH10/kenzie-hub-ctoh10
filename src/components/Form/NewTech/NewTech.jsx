import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./NewSchema";
import { Button } from "../../Button";
// import { toast } from "react-toastify";
// import { api } from "../../../services/api";
import { StyledForm } from "../style";
import { Input } from "../../Input/input";
import { useContext } from "react";
import { TechContext } from "../../../Contexts/TechContext";
// import { UserContext } from "../../../Contexts/UserContext";

export function NewTech({ action }) {
  // const { user } = useContext(UserContext);
  const { addTech } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(formSchema) });

  // async function addTech(techBody) {
  //   const headers = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer: ${token}`,
  //     },
  //   };

  //   try {
  //     let addProcess = await api.post("/users/techs", techBody, headers);
  //     // let upList = await api.get(`/users/${user}`);
  //     if (addProcess.status === 201) {
  //       toast.success("Tecnologia adicionada");
  //       // setList(upList.data.techs);
  //       action();
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     // toast.error(err.response.data.message);
  //   }
  // }

  function onSubmit(data) {
    addTech(data);
    action();
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Título</label>
      <Input
        type="text"
        user="title"
        placeholder={"Título da tech"}
        register={register("title")}
      />
      {errors.title?.message && (
        <label className="errorLabel" htmlFor="title">
          {errors.title.message}
        </label>
      )}
      <label htmlFor="status">Status</label>

      <select id="status" {...register("status")}>
        <option value="">Status de conhecimento</option>
        <option value="Interesse">Interesse</option>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
        <option value="Sênior">Sênior</option>
      </select>
      {errors.status?.message && (
        <label className="errorLabel" htmlFor="status">
          {errors.status.message}
        </label>
      )}
      <Button text={"Cadastrar tecnologia"} type={"submit"} />
    </StyledForm>
  );
}
