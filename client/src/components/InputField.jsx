import React from "react";

const InputField = ({
  id,
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  required,
  ...rest
}) => {
  return (
    <div className="grid gap-1">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}

        {...rest}
        className="bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded"
      />
    </div>
  );
};

export default InputField;
