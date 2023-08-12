import React, { ChangeEventHandler } from 'react';
import InputFieldWrapper from './inputField.styles';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type: string;
  required?: boolean;
  pattern?: string;
  placeholder?: string;
  inputTestId?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, type, required, pattern, placeholder, inputTestId }) => {
  return (
    <InputFieldWrapper>
      <label htmlFor={inputTestId || label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        pattern={pattern}
        placeholder={placeholder}
        id={inputTestId || label}
        data-testid={inputTestId || label}
      />
    </InputFieldWrapper>
  );
};

export default InputField;
