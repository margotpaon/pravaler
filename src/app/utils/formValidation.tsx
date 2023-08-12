interface FormValues {
    name: string;
    cpf: string;
    email: string;
    phone: string;
    selectedOption: string;
    cep: string;
  }
  
  export const validateForm = (values: FormValues): string[] => {
    const errors: string[] = [];
  
    if (!values.name.trim()) {
      errors.push('O campo Nome é obrigatório.');
    }
  
    if (!values.cpf.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)) {
      errors.push('CPF inválido. Digite no formato: 123.456.789-00.');
    }
  
    if (!values.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      errors.push('E-mail inválido. Digite um endereço de e-mail válido.');
    }
  
    if (!values.phone.match(/^\d{10,11}$/)) {
      errors.push('Número de telefone inválido. Digite apenas números (10 ou 11 dígitos).');
    }
  
    if (values.selectedOption === 'option2' && !values.cep.match(/^\d{8}$/)) {
      errors.push('CEP inválido. Digite um CEP válido com 8 dígitos.');
    }
  
    return errors;
  };
  