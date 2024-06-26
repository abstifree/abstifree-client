import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
  id: number;
  nomeProduto: string;
  quantidadeProduto: number;
  valorProduto: number;
  descricaoProduto: string;
  foto: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}