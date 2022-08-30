function Input({
  type = "text",
  name,
  id,
  register,
  errors,
  label,
  errorMsg = "Required",
}) {
  return (
    <div className="form-wrapper">
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        className={errors[name] && "--error"}
        {...register(name, { required: true })}
      />
      {errors[name] && <span className="error-msg">{errorMsg}</span>}
    </div>
  );
}

export default Input;
