// CSS
import "./ToUsuario.css";
// assets
import userLogado from "../../assets/user.png";
import carrinhoPng from "../../assets/carrinho-de-compras.png";
import addProduto from "../../assets/add-produto.png";
// React Router
import { Link } from "react-router-dom";

const ToUsuario = () => {

  const nomeUser = localStorage.getItem("nome");

  return (
    <div className="container-usuario">
      <Link to="/usuario" className="link-perfil">
        <img className="user-png" src={userLogado} alt="userLogado" />
        <span className="nome-user">Olá, {nomeUser}!</span>
      </Link>

      <Link to="/carrinho" className="link-btn-login">
        <img 
        src={carrinhoPng} 
        alt="carrinho"
         className="carrinho-png" />
         <span className="carrinho-escrito">Carrinho</span>
      </Link>

      <Link to="/cadastrarProduto" className="link-btn-login">
        <img
          src={addProduto}
          alt="adicionar-produto"
          className="add-produto-png"
        />
        <span className="addProduto-escrito">Adicionar</span>
      </Link>
    </div>
  );
};

export default ToUsuario;
