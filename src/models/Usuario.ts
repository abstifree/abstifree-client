import Produto  from "./Produto";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  tipo: string,
  senha: string,
  Produto?: Produto | null;
}
