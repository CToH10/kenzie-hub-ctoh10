import * as yup from "yup";

export const editSchema = yup.object().shape({
  title: yup.string().required("Título obrigatório"),
  status: yup.string().required("Status obrigatório"),
});
