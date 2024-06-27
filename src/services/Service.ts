import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const login = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const buscar = async (url: string, setDados: Function, header: Object) => {
  const resposta = await api.get(url, header);
  setDados(resposta.data);
};

export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
  try {
    console.log("Dados enviados:", dados);
    console.log("URL:", url);
    console.log("Cabeçalho:", header);
    const resposta = await api.post(url, dados, header);
    console.log("Resposta da API:", resposta.data);
    setDados(resposta.data);
  } catch (error) {
    console.log("Erro ao cadastrar:", error);
  }
};

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
  try {
    console.log("Dados enviados:", dados);
    console.log("URL:", url);
    console.log("Cabeçalho:", header);
    const resposta = await api.put(url, dados, header);
    console.log("Resposta da API:", resposta.data);
    setDados(resposta.data);
  } catch (error) {
    console.log("Erro ao atualizar:", error);
  }
};

export const deletar = async (url: string, header: Object) => {
  await api.delete(url, header);
};