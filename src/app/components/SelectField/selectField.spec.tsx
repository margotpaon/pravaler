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

test('calls onChange handler when an option is selected', async () => {
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ];
    const label = 'Select an option';
    const value = 'option2';
    const handleChange = jest.fn();
  
    render(<SelectField label={label} value={value} onChange={handleChange} options={options} />);
  
    const selectElement = await waitFor(() => screen.getByRole('combobox', { name: label }));
    
    fireEvent.mouseDown(selectElement); // Simulate opening dropdown
    
    const optionElement = await waitFor(() => screen.getByRole('option', { name: 'Option 3' }));
    fireEvent.click(optionElement);
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({ target: expect.objectContaining({ value: 'option3' }) })
    );
  });