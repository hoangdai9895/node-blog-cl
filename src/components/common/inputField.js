import React from "react";

const InputFieldGroup = ({
  name,
  placeholder,
  error,
  type,
  disabled,
  value,
  onChange
}) => {
  //   console.log(error);
  return (
    <div className="form-group">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={error ? "form-control is-invalid" : "form-control is-valid"}
        disabled={disabled}
      />
      {error !== null ? <div className="invalid-feedback">{error}</div> : ""}
    </div>
  );
};

export default InputFieldGroup;
