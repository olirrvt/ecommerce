import "./Cabecalho.css";
import lupa from "../../assets/pesquisa-de-lupa.png";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import BackToHome from "../BackToHome/BackToHome";
import Pesquisar from "../Pesquisar/Pesquisar";

const Cabecalho = () => {
  return (
    <header>
      <div className="container-caixa-header">
        <div className="container-header-principal">
          <BackToHome/>

          <div className="container-pesquisar">
          <Pesquisar />
          </div>

          <div className="container-usuario">
            <Link to="/login" className="btn-login">Login</Link>
            <Link to="/cadastro" className="btn-cadastrar">Cadastro</Link>
          </div>

        </div>

        <div>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Cabecalho;
