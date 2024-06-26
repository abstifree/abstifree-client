import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react/jsx-runtime';
import { CaretDown, SignIn, SignOut } from '@phosphor-icons/react';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import User from "../../assets/user.png";
import Carrinho from "../../assets/carrinho.png";
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(false);
  };

  function logout() {
    handleLogout();
    // Adicionei um exemplo de toast para confirmação de logout
    // toastAlerta("Usuário deslogado com sucesso", "sucesso");
    navigate("/login");
  }

  const handlePesquisa = () => {
    if (termoPesquisa) {
      navigate(`/produto/nomes/${termoPesquisa}`);
    }
  };

  let userDropDown;

  if (usuario.token !== "") {
    userDropDown = (
      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-zinc-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1">
          <Menu.Item>
            <Link
              to="/perfil"
              className="flex px-4 py-2 text-sm bg-zinc-100 text-darkMossGreen hover:bg-red-50
                          rounded-md transition duration-300 ease-in-out"
            >
              <img src={User} className="w-4 h-4 mr-2" alt="Ícone de Perfil" />
              <p className="px-2">Perfil</p>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/login"
              onClick={logout}
              className="flex px-4 py-2 text-sm bg-zinc-100 text-darkMossGreen hover:bg-blue-200
                          rounded-md transition duration-300 ease-in-out"
            >
              <SignOut size={16} className="-mr-1 self-center text-gray-400 flex" />
              <p className="px-2">Sair</p>
            </Link>
          </Menu.Item>
        </div>
      </Menu.Items>
    );
  } else {
    userDropDown = (
      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-zinc-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1">
          <Menu.Item>
            <Link
              to="/login"
              className="flex px-4 py-2 text-sm bg-zinc-100 text-darkMossGreen hover:bg-blue-200
                          rounded-md transition duration-300 ease-in-out"
              onClick={handleMenuClick}
            >
              <SignIn size={16} className="-mr-1 self-center text-gray-400 flex" />
              <p className="px-2">Entrar</p>
            </Link>
          </Menu.Item>
        </div>
      </Menu.Items>
    );
  }

  return (  
    <div className="bg-gray-100 font-bold text-black flex justify-between items-center w-full py-4 px-4">
      <div>
        <Link to='/home' className='hover:underline'>
        <img src={logo} alt="" className='App-logo w-32 h-30' />
        </Link>
      </div>

      <div className='flex space-x-4 items-center ml-auto'>
        <Menu as="div" className="relative inline-block">
          <div className="flex group">
            <Menu.Button className="hoverNone transition duration-300 ease-in-out inline-flex w-full hover:underline">
              Produtos
              <CaretDown
                size={10}
                className="ms-1 self-center text-darkMossGreen flex transition duration-300 ease-in-out"
                weight="bold"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}  
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-neutral-50">
              <div className="px-1 py-1">
                <Menu.Item>
                  <Link
                    to={`/produtos`}
                    className="block px-4 py-2 text-sm text-darkMossGreen hover:bg-blue-200 rounded-md transition duration-300 ease-in-out hover:underline"
                    onClick={handleMenuClick}
                  >
                    Todos os Produtos
                  </Link>
                </Menu.Item>
                {usuario.tipo === "1" && (
                  <Menu.Item>
                    <Link
                      to={`/cadastroProduto`}
                      className="block px-4 py-2 text-sm text-darkMossGreen hover:bg-blue-200 rounded-md transition duration-300 ease-in-out hover:underline"
                      onClick={handleMenuClick}
                    >
                      Cadastrar Produto
                    </Link>
                  </Menu.Item>
                )}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <Menu as="div" className="relative inline-block">
          <div className="flex group">
            <Menu.Button className="hoverNone transition duration-300 ease-in-out group-hover:text-sunglow inline-flex w-full hover:underline">
              Categorias
              <CaretDown
                size={10}
                className="ms-1 self-center text-darkMossGreen flex transition duration-300 ease-in-out group-hover:text-sunglow"
                weight="bold"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute inset-x-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-neutral-50">
              <div className="px-1 py-1">
                <Menu.Item>
                  <Link
                    to={`/categorias`}
                    className="block px-4 py-2 text-[12px]  text-darkMossGreen hover:bg-blue-200 rounded-md transition duration-200 ease-in-out hover:underline"
                    onClick={handleMenuClick}
                  >
                    Todas as Categorias
                  </Link>
                </Menu.Item>
                {usuario.tipo === "1" && (
                  <Menu.Item>
                    <Link
                      to={`/cadastroCategoria`}
                      className="block px-4 py-2 text-[12px]  text-darkMossGreen hover:bg-blue-200 rounded-md transition duration-200 ease-in-out hover:underline"
                      onClick={handleMenuClick}
                    >
                      Cadastrar Categoria
                    </Link>
                  </Menu.Item>
                )}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <Link to='/contato' className='hover:underline'>Nosso Time</Link>

        <div className="flex rounded-[12rem] items-center p-[1px] border border-black">
          <Menu as="div" className="relative inline-block text-darkMossBlue">
            <div className="flex group">
              <Link to="/cart" className="flex items-center justify-center hover:underline">
                <img
                  src={Carrinho}
                  className="w-4 h-4"
                  alt="Carrinho de Compras"
                />
                <p className="flex headerBtn ps-1 pe-1 items-center self-center mr-1">
                  Carrinho
                </p>
              </Link>
            </div>
          </Menu>
        </div>

        <Menu as="div" className="relative inline-block rounded-full p-[1px] border border-black">
          <div className="flex group">
            <Menu.Button className="hoverNone transition duration-300 ease-in-out inline-flex w-full hover:underline">
              <img src={User} className="w-5 h-5" alt="Ícone de Usuário" />
              <p className="flex headerBtn ps-1 pe-1 items-center self-center">
                Perfil
              </p>
              <CaretDown
                size={10}
                className="me-2 self-center text-darkMossGreen text-[12px] transition duration-300 ease-in-out"
                weight="bold"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            {userDropDown}
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
