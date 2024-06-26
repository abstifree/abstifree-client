import React, { useState, useEffect } from 'react';
import './Contato.css';
import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react';
import Footer from '../../components/footer/Footer';

// Import the images directly
import brunoImage from '../../assets/img_equipe/bruno.jpeg';
import ellenImage from '../../assets/img_equipe/ellen.jpg';
import lariImage from '../../assets/img_equipe/lari.jpeg';
import rodolfoImage from '../../assets/img_equipe/rodolfo.jpeg';
import thiagoImage from '../../assets/img_equipe/thiago.jpg';

interface TeamMember {
  name: string;
  link: string;
  title: string;
  linkIn: string;
  img: string;
}

const Contato: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [currentMemberIndex, setCurrentMemberIndex] = useState<number | null>(null);

  const exampleData: TeamMember[] = [
    { 
      name: 'Bruno Franchi',
      link: 'https://github.com/bruno4224onurb',
      title: 'Desenvolvedor FullStack',
      img: brunoImage,
      linkIn: 'https://www.linkedin.com/in/bruno-s-franchi/',
    },
    {
      name: 'Ellen Silva',
      link: 'https://github.com/ellencaroline16',
      title: 'Desenvolvedora FullStack',
      img: ellenImage,
      linkIn: 'https://www.linkedin.com/in/ec-silva',
    },
    {
      name: 'Larissa Sanches',
      link: 'https://github.com/LariSanches',
      title: 'Desenvolvedora FullStack',
      img: lariImage,
      linkIn: 'https://www.linkedin.com/in/larissasanches/',
    },
    {
      name: 'Rodolfo Ocanha',
      link: 'https://github.com/RodolfoOcanha',
      title: 'Desenvolvedor FullStack',
      img: rodolfoImage,
      linkIn: 'https://www.linkedin.com/in/rodolfo-ocanha/',
    },
    {
      name: 'Thiago Lacerda',
      link: 'https://github.com/Twayff',
      title: 'Desenvolvedor FullStack',
      img: thiagoImage,
      linkIn: 'https://www.linkedin.com/in/thiago-lacerda-521a3a246',
    },
  ];

  useEffect(() => {
    setTeamMembers(exampleData);
  }, []);

  const handleMemberClick = (index: number) => {
    setCurrentMemberIndex(index);
  };

  const handleModalClose = () => {
    setCurrentMemberIndex(null);
  };

  return (
    <div className="Contato">
      <header className='flex justify-center'>
        <h2 className='text-6xl font-bold text-black'>Desenvolvedores</h2>
      </header>
      <section className="team">
        <div className="scroll-container">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`member ${currentMemberIndex === index ? 'active' : ''} hover:scale-105`}
              onClick={() => handleMemberClick(index)}
            >
              <img src={member.img} alt={member.name} />
              <h2>{member.name}</h2>
              <h3>{member.title}</h3>
              <br></br>
              <h3 className='font-bold'>Redes Sociais:</h3>
              <div className="flex justify-center gap-8 paddingTop-2">
                <a href={member.linkIn} target="_blank" rel="noopener noreferrer">
                  <LinkedinLogo size={40} />
                </a>
                <a href={member.link} target="_blank" rel="noopener noreferrer">
                  <GithubLogo size={40} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {currentMemberIndex !== null && (
        <div className="modal" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={teamMembers[currentMemberIndex].img} alt={teamMembers[currentMemberIndex].name} />
            <h1>{teamMembers[currentMemberIndex].name}</h1>
            <h2>{teamMembers[currentMemberIndex].title}</h2>
            <div className="modal-controls">
              <button onClick={handleModalClose}>Fechar</button>
            </div>
          </div>
        </div>
      )}

      <div className='fixed bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default Contato;
