import "./Cabecalho.css";
import logo from "../../assets/desenvolvedor.png";
import lupa from "../../assets/pesquisa-de-lupa.png";

const Cabecalho = () => {
  return (
    <div className="container-caixa-header">

      <div className="container-logo">
        <h2 className="titulo-header">TechCommerce</h2>
        <img src={logo} alt="logo-da-pagina" className="logo-da-pagina" />
      </div>

      <div className="container-pesquisar">
        <input className="input-pesquisar-header" type="text" placeholder="Pesquise aqui o produto que deseja..."/>
        <div className="caixa-lupa-pesquisar">
            <img className="lupa-input" src={lupa} alt="lupa-pesquisar" />
        </div>
      </div>

      <div className="container-usuario">
        <button className="btn-login">Sign In</button>
        <button className="btn-cadastrar">Sign Up</button>
      </div>

    </div>
  );
};

export default Cabecalho;
