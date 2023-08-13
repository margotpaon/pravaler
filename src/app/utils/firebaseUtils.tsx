import { ref, push, update, DatabaseReference, remove, get, child } from 'firebase/database';
import { db } from '../../../firebase';


interface FormValues {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  cep: string;
  selectedOption: string;
}

let id: string | null = null;

export const saveFormDataToFirebase = async (cli_data: FormValues): Promise<{ success: boolean; message: string }> => {
  console.log("Dados do cliente salvos:", cli_data);
  
  try {
    
    if (!id) {
      id = push(ref(db, 'clientes')).key; // Crie uma nova chave para o cliente
    }

    const updates: { [key: string]: any } = {};
    updates[`/clientes/${id}`] = cli_data;
    const cli_ref: DatabaseReference = ref(db);

    await update(cli_ref, updates);
    
    return { success: true, message: 'Cliente Cadastrado' };
  } catch (error: any) {
    return { success: false, message: `Falha ao Cadastrar Cliente: ${error.message}` };
  }
};

export const removeData = () =>{
  if(!id) return {sucess:false, message: 'Cliente inválido'} 
  try {
    const cli_ref: DatabaseReference = ref(db, `/clientes/${id}`);
    remove(cli_ref);
    id = null;

    return { success: true, message: 'Cliente removido com sucesso' };
  } catch (error: any) {
    return { success: false, message: `Falha ao remover cliente: ${error.message}` };
  }
}
export const fetchDataFromFirebase = async () => {
  console.log("Dados lidos com sucesso")
  const dbRef = ref(db);
};