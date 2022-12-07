import { useForm } from "react-hook-form";
import { Button } from "../../Button";
import { formSchema } from "./RegisterSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../Input/input";
import { StyledForm } from "../style";
import { useContext } from "react";
import { UserContext } from "../../../Contexts/UserContext";

export function RegisterForm({ onSubmit }) {
  const { load } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(formSchema) });

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
      <label htmlFor="name">Nome</label>
      <Input
        placeholder="Nome"
        type="text"
        register={register("name")}
        id={"name"}
      />
      {errors.name?.message && (
        <label htmlFor="name" className="errorLabel">
          {errors.name.message}
        </label>
      )}
      <label htmlFor="email">Email</label>
      <Input
        placeholder="Email"
        type="email"
        register={register("email")}
        id={"email"}
      />
      {errors.email?.message && (
        <label htmlFor="email" className="errorLabel">
          {errors.email.message}
        </label>
      )}
      <label htmlFor="password">Senha</label>
      <Input
        placeholder="Senha"
        type="password"
        register={register("password")}
        id={"password"}
      />
      {errors.password?.message && (
        <label htmlFor="password" className="errorLabel">
          {errors.password.message}
        </label>
      )}
      <label htmlFor="passwordConfirmation">Confirme sua senha</label>
      <Input
        placeholder="Confirme sua senha"
        type="password"
        register={register("passwordConfirmation")}
        id={"passwordConfirmation"}
      />
      {errors.passwordConfirmation?.message && (
        <label htmlFor="passwordConfirmation">
          {errors.passwordConfirmation.message}
        </label>
      )}
      <label htmlFor="bio">Bio</label>
      <Input
        placeholder="Bio"
        type="text"
        register={register("bio")}
        id={"bio"}
      />
      {errors.bio?.message && (
        <label htmlFor="" className="errorLabel">
          {errors.bio.message}
        </label>
      )}
      <label htmlFor="contact">Contato</label>
      <Input
        placeholder="Contato"
        type="text"
        register={register("contact")}
        id={"contact"}
      />
      {errors.contact?.message && (
        <label htmlFor="contact" className="errorLabel">
          {errors.contact.message}
        </label>
      )}
      <label htmlFor="course_module">Selecionar módulo</label>
      <select id="course_module" {...register("course_module")}>
        <optgroup label="Front-End">
          <option value="m1">M1</option>
          <option value="m2">M2</option>
          <option value="m3">M3</option>
        </optgroup>
        <optgroup label="Back-End">
          <option value="m4">M4</option>
          <option value="m5">M5</option>
        </optgroup>
        <optgroup label="Empregabilidade">
          <option value="m6">M6</option>
        </optgroup>
      </select>
      {errors.course_module?.message && (
        <label htmlFor="course_module" className="errorLabel">
          {errors.course_module.message}
        </label>
      )}
      <Button text="Cadastrar" load={load} />
    </StyledForm>
  );
}
