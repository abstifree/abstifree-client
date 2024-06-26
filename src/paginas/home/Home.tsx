import './Home.css';
import home from '../../assets/home.jpg';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom'; 

function Home() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex-1 flex flex-col justify-center items-center">
                <img src={home} alt="Imagem de fundo" className="w-full h-auto" />
            </div>
            
            <Footer />
        </div>
    );
}

export default Home;