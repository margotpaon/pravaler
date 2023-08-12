import { validateForm } from './formValidation';

test('validateForm returns error messages for invalid form values', () => {
  const invalidValues = {
    name: '',
    cpf: '123.456.789-0', // Invalid CPF format
    email: 'invalid-email', // Invalid email format
    phone: '123', // Invalid phone number length
    selectedOption: 'option2',
    cep: '1234567', // Invalid CEP length
  };

  const errors = validateForm(invalidValues);

  expect(errors).toHaveLength(5);
  expect(errors).toContain('O campo Nome é obrigatório.');
  expect(errors).toContain('CPF inválido. Digite no formato: 123.456.789-00.');
  expect(errors).toContain('Número de telefone inválido. Digite apenas números (10 ou 11 dígitos).');
  expect(errors).toContain('E-mail inválido. Digite um endereço de e-mail válido.');
  expect(errors).toContain('CEP inválido. Digite um CEP válido com 8 dígitos.');
});

test('validateForm returns an empty array for valid form values', () => {
  const validValues = {
    name: 'John Doe',
    cpf: '123.456.789-00',
    email: 'john@example.com',
    phone: '1234567890',
    selectedOption: 'option2',
    cep: '12345678',
  };

  const errors = validateForm(validValues);

  expect(errors).toHaveLength(0);
});
