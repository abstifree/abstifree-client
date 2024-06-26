import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import imagem1 from '../../assets/sn1.jpg';
import imagem2 from '../../assets/sn2.jpg';
import imagem3 from '../../assets/sn3.jpg';
import imagem4 from '../../assets/sn4.jpg';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        transitionTime={500}
        stopOnHover={false}
        className="flex-1"
      >
        <div>
          <img src={imagem1} alt="Imagem 1" />
        </div>
        <div>
          <img src={imagem2} alt="Imagem 2" />
        </div>
        <div>
          <img src={imagem3} alt="Imagem 3" />
        </div>
        <div>
          <img src={imagem4} alt="Imagem 4" />
        </div>
      </Carousel>
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <h2 className="text-3xl font-bold mb-4">Bem-Vindo à Abstifree</h2>
        <p className="text-center">
          Nossa missão é ser um parceiro confiável na jornada de recuperação de todos que buscam superar o consumo de substâncias lícitas e ilícitas. Reconhecemos a gravidade do problema do uso excessivo de drogas, que afeta pessoas de todas as idades, desde jovens até idosos, e comprometemo-nos a fazer a diferença.
       
          Em uma sociedade onde o acesso precoce e contínuo a essas substâncias se tornou alarmante, a Abstifree surge como uma referência no atendimento humanizado e dedicado. Nosso objetivo é oferecer suporte integral, abordando não apenas a interrupção do uso, mas também promovendo o bem-estar físico e mental através de tratamentos personalizados.
        
          Com especialização em lidar com dependências a substâncias como nicotina, álcool e crack, além de outras, a Abstifree está equipada para ajudar você a reconstruir sua vida. Estamos comprometidos em fornecer um ambiente seguro e acolhedor, onde você pode encontrar o apoio necessário para alcançar a recuperação.
      
          Junte-se à nossa comunidade de recuperação e descubra o caminho para uma vida mais saudável e plena.
        </p>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-2">Missão</h3>
          <p>
            Nossa missão é ser um farol de esperança e um aliado indomável na jornada de recuperação de todos que buscam superar o consumo de substâncias lícitas e ilícitas. Reconhecemos a complexidade e a profundidade do problema do uso excessivo de drogas, que afeta pessoas de todas as idades, e nos comprometemos a fazer a diferença, proporcionando um ambiente seguro e acolhedor para aqueles que buscam mudança.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-2">Ação Social</h3>
          <p>
            Além de nosso trabalho cotidiano, a Abstifree está comprometida com a melhoria da sociedade como um todo. Para isso, decidimos investir em projetos sociais que fazem a diferença. Anualmente, revertemos 10% de nossas vendas para organizações não governamentais (ONGs) que trabalham diretamente com dependentes químicos. Este esforço visa ampliar o alcance e o impacto positivo de nossas iniciativas, contribuindo para a construção de uma comunidade mais forte e resiliente.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;