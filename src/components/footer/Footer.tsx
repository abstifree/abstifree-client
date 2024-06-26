import React from 'react';
import { FacebookLogo, InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Footer.css'

function Footer() {
  return (
    
    <footer className='bg-gradient-to-r from-blue-600 to-red-600 font-bold text-black flex justify-center w-full py-4'>
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="text-lg font-bold text-center">
            Acesse nossas redes sociais
            <div className="flex justify-center gap-3">
              <a href='https://github.com/abstifree/projetoIntegrador'>
                <GithubLogo size={48} weight='bold' />
              </a>
              <InstagramLogo size={48} weight='bold' />
              <LinkedinLogo size={48} weight='bold' />
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-3'>
          <p className="paragraph me-1">Copyright ©</p>
          <p className="paragraphBold me-1">Abstifree |</p>
          <p className="paragraph me-1">Desenvolvido por</p>
          <a href='/contato'>
          <p className="paragraphBold">Abstifree Team</p>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
