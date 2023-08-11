import React, { ChangeEventHandler } from 'react';

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
    <div>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
