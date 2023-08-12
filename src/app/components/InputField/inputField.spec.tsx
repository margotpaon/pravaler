// import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
// import InputField from '../InputField/inputField';

// test('calls onChange handler', () => {
//   const handleChange = jest.fn(); // Crie uma função mock para a onChange
//   const inputTestId = 'test-input'; // Use o mesmo valor que você definiu em inputTestId

//   const { getByTestId } = render(
//     <InputField
//       label="Nome"
//       value=""
//       onChange={handleChange}
//       type="text"
//       inputTestId={inputTestId}
//     />
//   );

//   const inputElement = getByTestId(inputTestId);

//   const newValue = 'Jane Smith';
//   fireEvent.change(inputElement, { target: { value: newValue } });

//   expect(handleChange).toHaveBeenCalledWith(
//     expect.objectContaining({ target: expect.objectContaining({ value: newValue }) })
//   );
// });