import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import React from "react";

interface CardProdutosProps {
  item: Produto;
}

function CardCart({ item }: CardProdutosProps) {
  const { removerProduto } = useContext(CartContext);
  const [quantidade, setQuantidade] = useState(1);

  const incrementarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const decrementarQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const { usuario } = useContext(AuthContext);

  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform min-[767px]:w-80 w-96 transform hover:scale-105 relative min-w-sm">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('https://i.pinimg.com/564x/e8/28/af/e828afc60eb895606b5a53c324dcf45c.jpg')`,
            opacity: 0.5,
          }}
        ></div>
        <div className="p-1 bg-blue-900"></div>
        <div className="p-6 relative z-10  flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold text-gray-800 mb-3">{item.nomeProduto}</h2>
          <p className="text-sm text-gray-600 mb-3">
            Categoria: {item.categoria?.nome_categoria}
          </p>
          <p className="text-lg font-bold text-gray-800 mb-3">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(item.valorProduto)}
          </p>{" "}
          <img src={item.foto} alt={item.nomeProduto} className="w-32 h-auto mb-3" />
          <ul className="text-sm text-gray-600 mb-3">
          </ul>
          <div className="p-3 flex justify-center">
            <button
              className="w-1/2 fixed bottom-0 bg-red-500 text-white rounded-full px-3 py-2
                           hover:bg-red-700 flex justify-center py-2 items-center focus:outline-none focus:shadow-outline-blue"
              onClick={() => removerProduto && removerProduto(item.id)}
            >
              Remover
            </button>
            <div className="flex items-center justify-center w-1/2">
              
              <select
                aria-label="Select quantity"
                className="text-sm mb-3 bg-white rounded-lg p-2 py-2 px-1 border border-gray-200 mr-2 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                value={quantidade}
                onChange={(e) => setQuantidade(Number(e.target.value))}
              >
                {[...Array(10).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCart;