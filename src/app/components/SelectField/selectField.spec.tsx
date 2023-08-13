import React from 'react';
import { render, fireEvent, waitFor, getByLabelText,  } from '@testing-library/react';
import SelectField from '../SelectField/selectField'; // Certifique-se de fornecer o caminho correto para o seu componente

test('renders SelectField with options', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  const label = 'Select an option';
  const value = 'option2';
  const handleChange = jest.fn();

  const { getByText } = render(
    <SelectField label={label} value={value} onChange={handleChange} options={options} />
  );

  const labelElement = getByText(label);
  expect(labelElement).toBeInTheDocument();

  options.forEach(option => {
    const optionElement = getByText(option.label);
    expect(optionElement).toBeInTheDocument();
  });
});
