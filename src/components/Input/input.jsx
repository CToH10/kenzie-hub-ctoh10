export function Input({
  placeholder,
  type = "text",
  register,
  id,
  disabled = false,
}) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      id={id}
      {...register}
      disabled={disabled}
    ></input>
  );
}
