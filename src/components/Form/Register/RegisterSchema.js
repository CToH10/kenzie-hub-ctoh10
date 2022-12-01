import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?_&-])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Senha deve ter 8 caracteres e conter pelo menos uma letra, um número, um símbolo"
    ),
  passwordConfirmation: yup
    .string()
    .test("passwordsMatch", "Senhas precisam ser iguais", function (value) {
      return this.parent.password === value;
    }),
  bio: yup.string().required("Bio obrigatória"),
  contact: yup.string().required("Forma de contato obrigatória"),
  course_module: yup.string().required("Módulo obrigatório"),
});
