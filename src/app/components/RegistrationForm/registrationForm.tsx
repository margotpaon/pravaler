"use client"
import React, { useState, FormEventHandler, ChangeEventHandler, useEffect } from 'react';
import InputField from '../InputField/inputField'; 
import SelectField from '../SelectField/selectField';
import { fetchStates, fetchCepData } from '../../utils/api';
import { validateForm } from '../../utils/formValidation';
import { StyledButton, StyledForm } from './registrationForm.styles';
interface RegistrationFormProps {}

interface State {
    sigla: string;
    nome: string;
}
  
interface Option {
    label: string;
    value: string;
}

interface FormValues {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  selectedOption: string;
  cep: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [states, setStates] = useState<State[]>([]);
  const [cep, setCep] = useState('');
  const [cepData, setCepData] = useState<any>(null);

  useEffect(() => {
    fetchStates(setStates);
  }, []);
    
  // Função para manipular o envio do formulário
  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    const values: FormValues = {
      name,
      cpf,
      email,
      phone,
      selectedOption,
      cep,
    };
  
    const errors = validateForm(values);
  
    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }
  };

  const selectOptions: Option[] = [
    { label: 'Selecione uma opção', value: '' },
    { label: 'Estado', value: 'option1' },
    { label: 'CEP', value: 'option2' },
  ];

  // Função para manipular a alteração da opção selecionada
  const handleOptionChange: ChangeEventHandler<HTMLSelectElement> = e => {
    setSelectedOption(e.target.value);
  };

  // Função para manipular a alteração do CEP
  const handleCepChange: ChangeEventHandler<HTMLInputElement> = e => {
    const newCep = e.target.value;
    setCep(newCep);
    if (newCep.length === 8) {
      fetchCepData(newCep, setCepData);
    } else {
      setCepData(null);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputField
        label="Nome"
        value={name}
        onChange={e => setName(e.target.value)}
        type="text"
        required
        placeholder="Digite seu nome completo"
        data-testid="Nome" />

      <InputField
        label="CPF"
        value={cpf}
        onChange={e => setCpf(e.target.value)}
        type="text"
        required
        pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
        placeholder="123.456.789-00"
        data-testid="CPF" />

      <InputField
        label="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        required
        placeholder="Digite seu e-mail"
        data-testid="E-mail" />

      <InputField
        label="Telefone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        type="tel"
        required
        pattern="[0-9]{10,11}"
        placeholder="Digite seu telefone"
        data-testid="Telefone" />

      <SelectField
        label="Selecione uma opção"
        value={selectedOption}
        onChange={handleOptionChange}
        options={selectOptions} />

      {selectedOption === 'option1' && (
        <SelectField
          label="Estado"
          value={selectedState}
          onChange={e => setSelectedState(e.target.value)}
          options={states.map(state => ({ label: state.nome, value: state.sigla }))} />
      )}

      {selectedOption === 'option2' && (
        <>
          <InputField
            label="CEP"
            value={cep}
            onChange={handleCepChange}
            type="text"
            placeholder="Digite o CEP" />

          {cepData && (
            <div>
              <p>Dados da localidade:</p>
              <p>CEP: {cepData.cep}</p>
              <p>Logradouro: {cepData.logradouro}</p>
              <p>Bairro: {cepData.bairro}</p>
              <p>Cidade: {cepData.localidade}</p>
              <p>Estado: {cepData.uf}</p>
            </div>
          )}
        </>
      )}

      <StyledButton type="submit">Enviar</StyledButton>
    </StyledForm>
      
  
  );
};

export default RegistrationForm;
