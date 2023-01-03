import "./Cabecalho.css";
import logo from "../../assets/desenvolvedor.png";
import lupa from "../../assets/pesquisa-de-lupa.png";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

const Cabecalho = () => {
  return (
    <header>
      <div className="container-caixa-header">
        <div className="container-header-principal">
          <div className="container-logo">
            <h2 className="titulo-header">TechCommerce</h2>
            <img src={logo} alt="logo-da-pagina" className="logo-da-pagina" />
          </div>

          <div className="container-pesquisar">
            <input
              className="input-pesquisar-header"
              type="text"
              placeholder="Pesquise aqui o produto que deseja..."
            />
            <div className="caixa-lupa-pesquisar">
              <img className="lupa-input" src={lupa} alt="lupa-pesquisar" />
            </div>
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
