import React, { useState, useEffect } from 'react';
import './Contato.css';
import { FacebookLogo, InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';
import Footer from '../../components/footer/Footer';


interface TeamMember {
  name: string;
  link: string;
  title: string;
  linkIn: string;
  imageUrl: string;
  bio: string;
}

const Contato: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [currentMemberIndex, setCurrentMemberIndex] = useState<number | null>(null);

  const exampleData: TeamMember[] = [
    { 
      name: 'Bruno Franchi',
      link: 'https://github.com/bruno4224onurb',
      title: 'Desenvolvedor FullStack',
      imageUrl: 'src/assets/img_equipe/bruno.jpeg',
      bio: 'Estudante de Física na Unicamp em transição para a área de Tecnologia, cursando um Bootcamp de Desenvolvimento Fullstack Java na ONG Generation Brasil, adquirindo habilidades em Java, Spring, HTML, CSS, Javascript, Typescript, React e MySQL, com conhecimentos autodidatas em Node.js, Mongodb e Express.js. Experiência recente na New Age Sports, uma tech startup, desenvolvendo habilidades em metodologias ágeis, liderança, comunicação em Inglês, resolução de problemas, análise de sistemas, ferramentas de IA e Machine Learning, além de atendimento ao cliente, organização de eventos e vendas.',
      linkIn: 'https://www.linkedin.com/in/bruno-s-franchi/',
    },
    {
      name: 'Ellen Silva',
      link: 'https://github.com/ellencaroline16',
      title: 'Desenvolvedora FullStack',
      imageUrl: 'src/assets/img_equipe/ellen.jpg',
      bio: 'Sou Ellen Caroline, uma profissional apaixonada por tecnologia, inspirada desde a infância pelos contos da Disney e pelo meu amado avô. Iniciei na área administrativa, mas meu coração sempre esteve na tecnologia. Atualmente, estou em uma emocionante transição de carreira para a área tech, com habilidades comunicativas, comprometimento e proatividade. No Bootcamp da Generation em Desenvolvimento Full Stack – Java, mergulho no universo do back end, dominando habilidades como POO, Hibernate JPA, JUnit, SQL, Java, JavaScript, Node.js, Spring Boot /Security, React, HTML5 e CSS3. Estou animada para aplicar essas habilidades em projetos desafiadores e contribuir para soluções inovadoras, honrando a memória do meu avô e realizando nossos sonhos compartilhados.',
      linkIn: 'https://www.linkedin.com/in/ec-silva',
    },
    {
      name: 'Larissa Sanches',
      link: 'https://github.com/LariSanches',
      title: 'Desenvolvedora FullStack',
      imageUrl: 'src/assets/img_equipe/lari.jpeg',
      bio: 'Estou em transição de carreira para TI, cursando Análise e Desenvolvimento de Sistemas na FATEC Ipiranga e completei o bootcamp da Generation, com habilidades em JAVA, SpringBoot, SQL, HTML, CSS e React. Com formação em Gestão Empresarial e pós-graduação em Produção Industrial, tenho experiência em áreas como produção e finanças, o que me dá uma base sólida para os desafios futuros na área de tecnologia da informação.',
      linkIn: 'https://www.linkedin.com/in/larissasanches/',
    },
    {
      name: 'Rodolfo Ocanha',
      link: 'https://github.com/RodolfoOcanha',
      title: 'Desenvolvedor FullStack',
      imageUrl: 'src/assets/img_equipe/rodolfo.jpeg',
      bio: 'Profissional em transição de carreira, cursando Análise e Desenvolvimento de Sistemas e participando do Bootcamp da Generation Brasil em Desenvolvedor Java Full Stack. Com nove anos de experiência em Comércio Exterior, desenvolvi habilidades analíticas, resolução de problemas, comunicação com clientes e gestão de tempo. Decidi iniciar na tecnologia por sua variedade de aprendizados e experiências. Aberto a oportunidades e conexões para meu desenvolvimento na área.',
      linkIn: 'https://www.linkedin.com/in/rodolfo-ocanha/',
    },
    {
        name: 'Thiago Lacerda',
        link: 'https://github.com/Twayff',
        title: 'Desenvolvedor FullStack',
        imageUrl: 'src/assets/img_equipe/thiago.jpg',
        bio: 'Sou formado em Automação Industrial pelo Senai e atualmente estudo Ciência da Computação na Unimetrocamp. Tenho conhecimento em Java, JavaScript, SQL, SpringBoot, React e Scrum. Participei do bootcamp da Generation em Java Full Stack, onde desenvolvi projetos e adquiri habilidades técnicas e soft skills. Acredito no trabalho em equipe para alcançar excelentes resultados e soluções.',
        linkIn: 'https://www.linkedin.com/in/thiago-lacerda-521a3a246',
      },
      
      {
        name: 'Gustavo Alvarenga',
        link: 'https://github.com/Gstalva',
        title: 'Desenvolvedor FullStack',
        imageUrl: 'src/assets/img_equipe/gustavo.jpg',
        bio: 'Tenho 3 anos de experiência como Gerente de QA e Melhoria Contínua, além de 2 anos como Supervisor de Entrega de Serviços. Durante esse tempo, desenvolvi habilidades sólidas em liderança de equipes, auditoria interna/externa e certificações no setor metrológico. Concluí um bootcamp fullstack pela Generation Brasil, adquirindo competências em Java, SpringBoot, MySQL, HTML, Bootstrap, React e mais. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas para expandir meu conhecimento e habilidades.',
        linkIn: 'https://www.linkedin.com/in/gustavo-alvarenga-31a972281/',
      },
      {
        name: 'Giovani Reis',
        link: 'https://github.com/giolreis',
        title: 'Desenvolvedor FullStack',
        imageUrl: 'src/assets/img_equipe/giovani.jpg',
        bio: 'Atualmente, estou em formação em Java Full Stack pelo programa Generation Brasil e sou graduando em Tecnologia Análise e Desenvolvimento de Sistemas no IFSP-HTO, além de cursar Técnico em Informática no IF Sul de Minas Campus Muzambinho. Durante dois anos de estágio na área de TIC no CEPETRO-UNICAMP, desenvolvi habilidades em instalação de sistemas operacionais, suporte ao usuário e configuração de redes. Tenho conhecimento em linguagens como C, C#, Java, Python e R, e meu interesse se estende para áreas como Inteligência Artificial, Machine Learning, Internet das Coisas, Ciência de Dados e Computação em Nuvem.',
        linkIn: 'https://www.linkedin.com/in/giovaniluizreis/',
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
    <div className="Contato  ">
    <header className='flex justify-center'>
    <h2 className='text-9xl font-bold' style={{backgroundImage: 'linear-gradient(to right, blue, red)', WebkitBackgroundClip: 'text', color: 'transparent', textShadow: '0 0 5px rgba(0,0,0,0.5)'}}>Desenvolvedores</h2>
    </header>
      <section className="team">
        <div className="scroll-container">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`member ${currentMemberIndex === index ? 'active' : ''} hover:scale-105` }
              onClick={() => handleMemberClick(index)}
            >
              <img src={member.imageUrl} alt={member.name} />
              <h2>{member.name}
              </h2>
              <h3>{member.title}</h3>
              <p>{member.bio.substring(0, 60)}...</p>
              <br></br>
              <h3 className='font-bold'>Redes Sociais:</h3>
              <div className="flex justify-center gap-8 paddingTop-2">
                <a  href={member.linkIn} target="_blank" rel="noopener noreferrer">
                  <LinkedinLogo size={40}/>
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
            <img src={teamMembers[currentMemberIndex].imageUrl} alt={teamMembers[currentMemberIndex].name} />
            <h1>{teamMembers[currentMemberIndex].name}</h1>
            <h2>{teamMembers[currentMemberIndex].title}</h2>
            <p>{teamMembers[currentMemberIndex].bio}</p>
            <div className="modal-controls">
              <button onClick={handleModalClose}>Fechar</button>
            </div>
          </div>
        </div>
      )}

      <div className='fixed bottom-0 w-full'>
      <Footer></Footer>
      </div>
    </div>
  );
};

export default Contato;