import { ref, push, update, DatabaseReference, remove, onValue } from 'firebase/database';
import { db } from '../../../firebase';
import { Cliente, FormValues } from '../components/RegistrationForm/registrationForm'

let id: string | null = null;

export const saveFormDataToFirebase = async (cli_data: FormValues): Promise<{ success: boolean; message: string }> => {
  console.log("Dados do cliente salvos:", cli_data);
  
  try {
    
    if (!id) {
      id = push(ref(db, 'clientes')).key; // Crie uma nova chave para o cliente
    }

    const updates: { [key: string]: any } = {};
    updates[`/clientes/${id}`] = {
      nome: cli_data.name,
      email: cli_data.email,
      cpf: cli_data.cpf,
      phone: cli_data.phone,
      cepData: cli_data.cepData,
      opcao: cli_data.selectedOption,
      estado: cli_data.estado,
    };
    const cli_ref: DatabaseReference = ref(db);
    console.log(updates)
    update(cli_ref, updates);
    
    return { success: true, message: 'Cliente Cadastrado' };
  } catch (error: any) {
    return { success: false, message: `Falha ao Cadastrar Cliente: ${error.message}` };
  }
};

export const fetchClientes = (setClientes: React.Dispatch<React.SetStateAction<Cliente[] | undefined>>) => {
  const refClientes = ref(db, 'clientes');
  onValue(refClientes, snapshot => {
    const resultadoClientes = Object.entries<Cliente>(snapshot.val() ?? {}).map(([chave, valor]) => ({
      chave,
      nome: valor.nome,
      email: valor.email,
      cpf: valor.cpf,
      phone: valor.phone,
      cep: valor.cep,
      opcao: valor.opcao,
      estado: valor.estado,
      cepData: valor.cepData
    }));
    console.log(resultadoClientes)
    setClientes(resultadoClientes);
  });
};