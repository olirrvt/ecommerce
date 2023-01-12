import "./Sucesso.css"
import sucessoLogin from "../../assets/verificado.png";
import { Link } from "react-router-dom";

const Sucesso = () => {
  return (
    <>
      <main>
        <div className="container-sucesso">
          <div className="caixa-sucesso">
            <h1 className="conteudo-sucesso-escrito"> Sucesso! </h1>
            <img className="icon-sucesso" src={sucessoLogin} alt="sucesso" />
            <Link className="link-home" to={"/"}><h3 className="conteudo-sucesso-escrito">Voltar a tela principal</h3></Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Sucesso;
