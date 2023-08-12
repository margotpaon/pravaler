import React from 'react';

export interface State {
  sigla: string;
  nome: string;
}

export const fetchStates = async (setStates: React.Dispatch<React.SetStateAction<State[]>>) => {
  try {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const data = await response.json();
    setStates(data);
  } catch (error) {
    console.error('Erro ao buscar estados:', error);
  }
};

export const fetchCepData = async (
  cep: string,
  setCepData: React.Dispatch<React.SetStateAction<any>>
) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    setCepData(data);
  } catch (error) {
    console.error('Erro ao buscar dados de CEP:', error);
  }
};
