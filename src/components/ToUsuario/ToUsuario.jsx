// CSS
import "./ToUsuario.css";
// assets
import userLogado from "../../assets/user.png";
import carrinhoPng from "../../assets/carrinho.png";
import addProduto from "../../assets/add-produto.png";
import logoutPng from "../../assets/sair.png";
// React Router
import { Link } from "react-router-dom";
// React
import { render } from "react-dom";
// Components
import Home from "../../pages/Home/Home";

const ToUsuario = () => {

  const nomeUser = localStorage.getItem("nome");

  const logoutUser = () => {
    localStorage.clear();
    window.location.reload(true);
  };

  return (
    <div className="container-usuario">
      <Link className="link-perfil">
        <img className="user-png" src={userLogado} alt="userLogado" />
        <span className="nome-user">Olá, {nomeUser}!</span>
      </Link>

      <Link className="link-btn-login">
        <img src={carrinhoPng} alt="carrinho" className="carrinho-png" />
      </Link>

      <Link className="link-btn-login">
        <img
          src={addProduto}
          alt="adicionar-produto"
          className="add-produto-png"
        />
      </Link>

      <button onClick={logoutUser} className="btn-logout">
        <img className="logout-user" src={logoutPng} alt="sair-da-conta" />
      </button>
    </div>
  );
};

export default ToUsuario;
