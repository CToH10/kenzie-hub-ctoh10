import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../Contexts/TechContext";
import { Button } from "../../Button";
import { Input } from "../../Input/input";
import { StyledForm } from "../style";
import { editSchema } from "./EditSchema";

export function EditForm({ action, techID, title }) {
  const { editTech } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: title,
    },
    mode: "onBlur",
    resolver: yupResolver(editSchema),
  });

  function onSubmit(data) {
    editTech(techID, data);
    action();
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Título</label>
        <Input
          type="text"
          user="title"
          register={register("title")}
          disabled={true}
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
        <Button text={"Editar tecnologia"} type={"submit"} />
      </StyledForm>
    </>
  );
}
