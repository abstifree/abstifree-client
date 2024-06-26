import { Link } from 'react-router-dom';
import produto from '../../../models/Produto';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { CartContext } from '../../../contexts/CartContext';
import { RotatingLines } from 'react-loader-spinner';
import { toast } from 'react-toastify'; // Importando a função toast da biblioteca react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Importando o CSS da biblioteca

interface CardprodutoProps {
  produto: produto;
}

function Cardproduto({ produto }: CardprodutoProps) {
  const { Selecionar } = useContext(CartContext);
  const [showOptions, setShowOptions] = useState(false);
  const toggleOptions = () => setShowOptions(!showOptions);
  const { isLoading } = useContext(AuthContext);

  const { usuario } = useContext(AuthContext);
  const isAdmin = usuario.tipo === "1";

  const adicionarAoCarrinho = () => {
    Selecionar(produto);
    toast.success('Produto adicionado ao carrinho'); // Exibir toast de sucesso
  };

  return (
    <div className='flex justify-center'>
      <div className='bg-white rounded-lg overflow-hidden shadow-md transition-transform max-[767px]:w-80 w-96 transform hover:scale-105 relative max-w-sm'>
        <div
          className='absolute inset-0 bg-cover bg-center z-0'
          style={{
            backgroundImage: `url('https://i.pinimg.com/564x/e8/28/af/e828afc60eb895606b5a53c324dcf45c.jpg')`,
            opacity: 0.3,
          }}
        ></div>
        <div className='p-1 bg-blue-900'></div>
        <div className='p-6 relative z-10  flex flex-col justify-center items-center'>
          <h2 className='text-2xl font-bold text-gray-800 mb-3'>{produto.nomeProduto}</h2>
          <p className='text-sm font-bold text-gray-900 mb-3'>Categoria: {produto.categoria?.nome_categoria}</p>
          <p className='text-lg font-bold text-gray-800 mb-3'>R$: {produto.valorProduto}</p>
          <img src={produto.foto} alt={produto.nomeProduto} className="w-32 h-auto mb-3" />
          <ul className='text-sm font-bold text-gray-900 mb-3'>
            <li className='mb-1 flex items-center'>
              Quantidade disponível: {produto.quantidadeProduto}
            </li>
            <h2 className='text-lg font-bold text-gray-800 mb-3'>{produto.descricaoProduto}</h2>
          </ul>
          <div className="p-3 flex justify-center">
            <button
              className="w-1/2 fixed bottom-5 bg-blue-800 text-white rounded-full px-3 py-2
                           hover:bg-blue-600 flex items-center focus:outline-none focus:shadow-outline-blue
                           justify-center py-2"
              onClick={adicionarAoCarrinho} // Chamar a função adicionarAoCarrinho quando o botão for clicado
            >
              {isLoading ? <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> :
                <span>Comprar</span>}
            </button>
          </div>
        </div>
        {isAdmin && (
          <div className="absolute top-0 right-0 mt-3 mr-3 z-10">
            <button
              onClick={toggleOptions}
              className="p-2 focus:outline-none"
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-800 hover:text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {showOptions && (
              <ul className="text-sm text-gray-600 mb-3 bg-white border border-gray-200 rounded-lg p-2">
                <li>
                  <Link
                    to={`/editarproduto/${produto.id}`}
                    className="text-blue-900 hover:text-blue-700 block py-1 px-2"
                  >
                    Editar
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/deletarproduto/${produto.id}`}
                    className="text-red-600 hover:text-red-400 block py-1 px-2"
                  >
                    Deletar
                  </Link>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cardproduto;
