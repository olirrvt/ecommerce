// Styles
import "./Usuario.css";
// Assets
import userLogado from "../../assets/user.png";
// Components
import BackToHome from "../../components/BackToHome/BackToHome";
import { useState } from "react";
// Function
import editUser from "../../services/editUser";

const Usuario = () => {
  // Nome Usuario
  const userLocal = localStorage.getItem("nome");
  const user =
    localStorage.getItem("nome").charAt(0).toUpperCase() + userLocal.slice(1);

  // Logout
  const logoutUser = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  // Editar dados

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const hdNome = (e) => {
    setNome(e.target.value);
  };

  const hdEmail = (e) => {
    setEmail(e.target.value);
  };

  const hdSenha = (e) => {
    setSenha(e.target.value);
  };

  const hdSubmit = (e) => {
    e.preventDefault();
    editUser(nome, email, senha);
  };

  return (
    <>
      <BackToHome />

      <main>
        <div className="container-perfil">
          <div className="caixa-usuario">
            <div className="perfil">
              <div className="area-user">
                <img
                  className="user-logado"
                  src={userLogado}
                  alt="imagem-user"
                />
                <span className="nome-user">{user}</span>
              </div>

              <div className="menu-usuario">
                <span className="item-menu">Perfil</span>
                <span className="item-menu">Carrinho</span>
                <span className="item-menu">Meus produtos</span>
                <span className="delete">Apagar Perfil</span>
                <span onClick={logoutUser} className="logout">
                  Sair da conta
                </span>
              </div>
            </div>

            <div className="editar">
              <div className="titulo-perfil">
                <h2>Perfil do Usuário</h2>
                <span>Edite suas informações de usuário</span>
              </div>

              <div className="container-dados">
                <form onSubmit={hdSubmit} className="editar-dados">
                  <label>
                    <input
                      className="input-editar"
                      type="text"
                      name="nome-usuario"
                      placeholder="Digite o novo nome que deseja..."
                      onChange={hdNome}
                    />
                  </label>
                  <label>
                    <input
                      className="input-editar"
                      type="email"
                      name="email-usuario"
                      placeholder="Digite o novo e-mail que deseja..."
                      onChange={hdEmail}
                    />
                  </label>
                  <label>
                    <input
                      className="input-editar"
                      type="password"
                      name="senha-usuario"
                      placeholder="Digite a nova senha que deseja..."
                      onChange={hdSenha}
                    />
                  </label>
                  <button className="btn-alterar">Alterar dados</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Usuario;
