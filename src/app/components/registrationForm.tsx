"use client"
import React, { useState, FormEventHandler, ChangeEventHandler, useEffect } from 'react';
import InputField from './inputField';
import SelectField from './selectField';

interface RegistrationFormProps {}

interface State {
    sigla: string;
    nome: string;
}
  
interface Option {
    label: string;
    value: string;
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
    fetchStates();
  }, []);

  const fetchStates = async () => {
    try {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
      const data = await response.json();
      setStates(data);
    } catch (error) {
      console.error('Erro ao buscar estados:', error);
    }
  };

  const fetchCepData = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      setCepData(data);
    } catch (error) {
      console.error('Erro ao buscar dados de CEP:', error);
    }
  };

  // Função para manipular o envio do formulário
  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    const errors: string[] = [];

    if (!name.trim()) {
      errors.push('O campo Nome é obrigatório.');
    }

    if (!cpf.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)) {
      errors.push('CPF inválido. Digite no formato: 123.456.789-00.');
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      errors.push('E-mail inválido. Digite um endereço de e-mail válido.');
    }

    if (!phone.match(/^\d{10,11}$/)) {
      errors.push('Número de telefone inválido. Digite apenas números (10 ou 11 dígitos).');
    }

    if (selectedOption === 'option2' && !cep.match(/^\d{8}$/)) {
      errors.push('CEP inválido. Digite um CEP válido com 8 dígitos.');
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }

    // Se passou nas validações, você pode prosseguir com o envio dos dados
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
      fetchCepData(newCep);
    } else {
      setCepData(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Nome"
        value={name}
        onChange={e => setName(e.target.value)}
        type="text"
        required
        placeholder="Digite seu nome completo"
      />

      <InputField
        label="CPF"
        value={cpf}
        onChange={e => setCpf(e.target.value)}
        type="text"
        required
        pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
        placeholder="123.456.789-00"
      />

      <InputField
        label="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        required
        placeholder="Digite seu e-mail"
      />

      <InputField
        label="Telefone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        type="tel"
        required
        pattern="[0-9]{10,11}"
        placeholder="Digite seu telefone"
      />

      <SelectField
        label="Selecione uma opção"
        value={selectedOption}
        onChange={handleOptionChange}
        options={selectOptions}
      />

      {selectedOption === 'option1' && (
        <SelectField
          label="Estado"
          value={selectedState}
          onChange={e => setSelectedState(e.target.value)}
          options={states.map(state => ({ label: state.nome, value: state.sigla }))}
        />
      )}

      {selectedOption === 'option2' && (
        <>
          <InputField
            label="CEP"
            value={cep}
            onChange={handleCepChange}
            type="text"
            placeholder="Digite o CEP"
          />

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

      <button type="submit">Enviar</button>
    </form>
  );
};

export default RegistrationForm;

