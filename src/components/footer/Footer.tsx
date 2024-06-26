import React from 'react';
import { FacebookLogo, InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Footer.css'

function Footer() {
  return (
    <footer className='bg-grey-100 font-bold text-black flex justify-center w-full py-4'>
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="text-lg font-bold text-center">
            Acesse nossas redes sociais
            <div className="flex justify-center gap-3">
              <a href='https://github.com/abstifree' target="_blank" rel="noopener noreferrer">
                <GithubLogo size={40} weight='bold' />
              </a>
              <a href='#' target="_blank" rel="noopener noreferrer">
                
              </a>
              <a href='#' target="_blank" rel="noopener noreferrer">
                <LinkedinLogo size={40} weight='bold' />
              </a>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-2'>
          <p className="paragraph me-1">Copyright ©</p>
          <p className="paragraphBold me-1">Abstifree |</p>
          <p className="paragraph me-1">E-mail contato:</p>
          <Link to='/contato' className="paragraphBold">suporte.abstifree@gmail.com</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;