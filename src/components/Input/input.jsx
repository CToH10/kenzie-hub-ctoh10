export function Input({ placeholder, type = "text", register, id }) {
  return (
    <input placeholder={placeholder} type={type} id={id} {...register}></input>
  );
}
