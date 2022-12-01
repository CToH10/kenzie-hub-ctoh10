import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./NewSchema";
import { Button } from "../../Button";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import { StyledForm } from "../style";
import { Input } from "../../Input/input";

export function NewTech({ token, action, newList, id }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(formSchema) });

  async function addTech(techBody) {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer: ${token}`,
      },
    };

    try {
      let addProcess = await api.post("/users/techs", techBody, headers);
      let upList = await api.get(`/users/${id}`);
      if (addProcess.status === 201) {
        toast.success("Tecnologia adicionada");
        newList(upList.data.techs);
        action();
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  function onSubmit(data) {
    addTech(data);
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Título</label>
      <Input
        type="text"
        id="title"
        placeholder={"Título da tech"}
        register={register("title")}
      />
      {errors.title?.message && (
        <label className="errorLabel" for="title">
          {errors.title.message}
        </label>
      )}
      <label htmlFor="status">Status</label>

      <select id="status" {...register("status")}>
        <option value="">Status de conhecimento</option>
        <option value="Interesse">Interesse</option>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avancado">Avançado</option>
        <option value="Sênior">Sênior</option>
      </select>
      {errors.status?.message && (
        <label className="errorLabel" for="status">
          {errors.status.message}
        </label>
      )}
      <Button text={"Cadastrar tecnologia"} type={"submit"} />
    </StyledForm>
  );
}
