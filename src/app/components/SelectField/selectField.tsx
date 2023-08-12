import React, { ChangeEventHandler } from 'react';
import SelectFieldWrapper from './selectField.styles';

interface Option {
  label: string;
  value: string;
}

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: Option[];
}

const SelectField: React.FC<SelectFieldProps> = ({ label, value, onChange, options }) => {
  return (
    <SelectFieldWrapper>
      <label htmlFor={`select-${label}`}>{label}</label>
      <select id={`select-${label}`} value={value} onChange={onChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </SelectFieldWrapper>
  );
};

export default SelectField;
