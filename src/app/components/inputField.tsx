import React, { ChangeEventHandler } from 'react';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type: string;
  required?: boolean;
  pattern?: string;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, type, required, pattern, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        pattern={pattern}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
