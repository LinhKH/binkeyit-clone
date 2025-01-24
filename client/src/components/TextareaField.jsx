import React from "react";

const TextareaField = ({ id, label, placeholder, name, value, onChange, required, rows }) => {
  return (
    <div className="grid gap-1">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className="bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded resize-none"
      />
    </div>
  );
};

export default TextareaField;