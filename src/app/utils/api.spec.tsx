import { fetchCepData, fetchStates } from '../utils/api';

test('fetchStates function fetches states data correctly', async () => {
    const mockResponse = [{ sigla: 'SP', nome: 'São Paulo' }]; // Dados de exemplo para o mock da resposta
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });
  
    const setStates = jest.fn();
  
    await fetchStates(setStates);
  
    expect(global.fetch).toHaveBeenCalledWith('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    expect(setStates).toHaveBeenCalledWith(mockResponse);
  });
  
  test('fetchCepData function fetches CEP data correctly', async () => {
    const mockCep = '12345678';
    const mockResponse = {
      cep: '12345678',
      logradouro: 'Rua Exemplo',
      bairro: 'Bairro Exemplo',
      localidade: 'Cidade Exemplo',
      uf: 'SP',
    };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });
  
    const setCepData = jest.fn();
  
    await fetchCepData(mockCep, setCepData);
  
    expect(global.fetch).toHaveBeenCalledWith(`https://viacep.com.br/ws/${mockCep}/json/`);
    expect(setCepData).toHaveBeenCalledWith(mockResponse);
  });
  