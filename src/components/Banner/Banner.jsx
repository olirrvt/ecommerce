import "./Banner.css";
import produto from "../../assets/config.svg";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="container-banner">

            <div className="container-conteudo-escrito">
                <h1 className="titulo-banner-escrito">Tecnologia para sua <br></br> comodidade</h1>
                <div className="conteudo-escrito-descricao">
                    Para o seu conforto, estudo ou trabalho doméstico, <br></br> tudo o que você precisa está aqui
                </div>
                <Link to="/produtos" className="btn-comprar">Ver Produtos Disponíveis</Link>
            </div>

            <div className="container-da-imagem">
                <img className="produto-banner" src={ produto } alt="produto-em-estoque"/>
            </div>
        </div>
    );
};

export default Banner;