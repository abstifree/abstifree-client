import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';
import Home from './paginas/home/Home';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify'; // Importando o ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importando o CSS da biblioteca react-toastify
import Sobrenos from './paginas/sobrenos/Sobrenos'
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import Contato from './paginas/contato/Contato';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
import FormularioProduto from './components/produtos/formularioProdutos/FormularioProduto';
import DeletarProduto from './components/produtos/deletarProdutos/deletarProduto';
import Cart from './components/carrinho/cart/Cart';
import { CartProvider } from './contexts/CartContext';
import Perfil from './paginas/perfil/Perfil';

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <ToastContainer /> {/* Inicializando o ToastContainer */}
            <div>
              <Navbar />
              <div className='min-h-[64vh]'>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/" element={<Login />} />
                  <Route path="/sobrenos" element={<Sobrenos />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/cadastro" element={<Cadastro />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/categorias" element={<ListaCategorias />} />
                  <Route
                    path="/cadastroCategoria"
                    element={<FormularioCategoria />}
                  />
                  <Route
                    path="/editarCategoria/:id"
                    element={<FormularioCategoria />}
                  />
                  <Route
                    path="/deletarCategoria/:id"
                    element={<DeletarCategoria />}
                  />

                  <Route path="/produtos" element={<ListaProdutos />} />
                  <Route path="/cadastroProduto" element={<FormularioProduto />} />
                  <Route
                    path="/editarProduto/:id"
                    element={<FormularioProduto />}
                  />
                  <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
                  <Route path="/contato" element={<Contato />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/perfil" element={<Perfil />} />
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;