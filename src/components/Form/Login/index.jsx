import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./LoginSchema";
import { Input } from "../../Input/input";
import { StyledForm } from "../style";

export function LoginForm({ loginUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(formSchema) });

  return (
    <StyledForm onSubmit={handleSubmit(loginUser)} noValidate>
      <label htmlFor="email">Email</label>
      <Input
        type="text"
        id="email"
        placeholder="Digite seu email"
        register={register("email")}
      />
      {errors.email?.message && (
        <label htmlFor="email" className="errorLabel">
          {errors.email.message}
        </label>
      )}
      <label htmlFor="password">Senha</label>
      <Input
        type="password"
        id="password"
        placeholder="Digite sua senha"
        register={register("password")}
      />
      {errors.password?.message && (
        <label htmlFor="password" className="errorLabel">
          {errors.password.message}
        </label>
      )}
      <button type="submit">Entrar</button>
    </StyledForm>
  );
}
