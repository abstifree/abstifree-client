import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import { toastAlerta } from '../../../utils/toastAlerta';
import Footer from '../../footer/Footer';


function FormularioProduto() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome_categoria: '',
    descricao: ''
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nomeProduto: '',
    quantidadeProduto: 0,
    foto: '',
    valorProduto: 0,
    descricaoProduto: '',
    categoria: null,
    usuario: null,
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategorias() {
    await buscar('/categorias', setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
      console.log(categoria);

    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setProduto((prevProduto) => ({
      ...prevProduto,
      [name]: value,
    }));
  }

  function retornar() {
    navigate('/produtos');
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ produto });

    if (id != undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta("Produto atualizado com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          console.error('Erro ao atualizar/cadastrar o Produto:', error);
          toastAlerta(`Ocorreu um erro: ${error.message}`, "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta("Produto cadastrado com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout()
        } else {
          toastAlerta('Erro ao cadastrar o Produto', "erro");
        }
      }
    }
  }
  const carregandoCategoria = categoria.descricao === '';

  return (
    <div className="sm:m-10 bg-blue h-screen max-[767px]:my-5 flex flex-col items-center justify-center text-start">
    <h1 className="text-4xl font-bold text-black">{id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}</h1>

      <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="nomeProduto">Nome do produto</label>
          <input
            value={produto.nomeProduto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Nome"
            name="nomeProduto"
            required
            className="border-2 border-slate-700 rounded p-2 transition duration-300 ease-in-out hover:border-blue-500 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="quantidadeProduto">Quantidade do Produto em Estoque</label>
          <input
            value={produto.quantidadeProduto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            placeholder="Quantidade"
            name="quantidadeProduto"
            required
            className="border-2 border-slate-700 rounded p-2 transition duration-300 ease-in-out hover:border-blue-500 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo" className="text-black">Foto do produto</label>
          <input
            value={produto.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="link"
            placeholder="Foto"
            name="foto"
            required
            className="border-2 border-slate-700 rounded p-2 transition duration-300 ease-in-out hover:border-blue-500 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="valorProduto">Valor do Produto</label>
          <input
            value={produto.valorProduto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Valor"
            name="valorProduto"
            required
            pattern="^\d+(,\d{1,2})?$|^(\d*\.)?\d+$" 
            title="Insira um valor decimal válido, usando vírgula ou ponto como separador"
            className="border-2 border-slate-700 rounded p-2 transition duration-300 ease-in-out hover:border-blue-500 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricaoProduto">Descrição do Produto</label>
          <input
            value={produto.descricaoProduto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Descrição"
            name="descricaoProduto"
            required
            className="border-2 border-slate-700 rounded p-2 transition duration-300 ease-in-out hover:border-blue-500 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="categoria">Categoria do Produto</label>
          <select
            name="categoria"
            id="categoria"
            className='border p-2 border-slate-800 rounded transition duration-300 ease-in-out hover:border-blue-500 focus:border-blue-500 focus:outline-none'
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>Selecione uma categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>{categoria.nome_categoria}</option>
            ))}
          </select>
        </div>
        <button disabled={carregandoCategoria} type='submit' className='rounded bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
          {carregandoCategoria ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
        </button>
      </form>
      <div className='fixed bottom-0 w-full'>
      <Footer></Footer>
      </div>
    </div>
  );
}
export default FormularioProduto;