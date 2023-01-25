// Styles
import "./Usuario.css";
// Assets
import userLogado from "../../assets/user.png";
// Components
import BackToHome from "../../components/BackToHome/BackToHome";
import { useState } from "react";
// Function
import editUser from "../../services/editUser";
import { useEffect } from "react";

const Usuario = () => {
  // Dados Local
  const userLocal = localStorage.getItem("nome");
  const user = localStorage.getItem("nome")
  .charAt(0).toUpperCase() + userLocal.slice(1);
  
  const emailUser = localStorage.getItem("email"); 

  // Logout
  const logoutUser = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  // Editar dados
  const [sucesso, setSucesso] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const hdNome = (e) => {
    setNome(e.target.value);
    setSucesso(false);
  };

  const hdEmail = (e) => {
    setEmail(e.target.value);
    setSucesso(false);
  };

  const hdSenha = (e) => {
    setSenha(e.target.value);
    setSucesso(false);
  };

  const hdSubmit = (e) => {
    e.preventDefault();
    const res = editUser(nome, email, senha)
    .then((res) => {
      !res.data.error && setSucesso(true);
    });
    setNome("");
    setEmail("");
    setSenha("");
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
                <span className="nome-perfil">{user}</span>
                <span className="email-perfil"> {emailUser}</span>
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

                {sucesso && (
                  <div className="msg-sucesso">
                    <span className="msg-escrita">
                      Usuário Atualizado com sucesso!
                    </span>
                  </div>
                )}

                <form onSubmit={hdSubmit} className="editar-dados">
                  <label>
                    <input
                      className="input-editar"
                      type="text"
                      name="nome-usuario"
                      value={"" || nome}
                      placeholder="Digite o novo nome..."
                      onChange={hdNome}
                    />
                  </label>
                  <label>
                    <input
                      className="input-editar"
                      type="email"
                      name="email-usuario"
                      value={"" || email}
                      placeholder="Digite o novo email..."
                      onChange={hdEmail}
                    />
                  </label>
                  <label>
                    <input
                      className="input-editar"
                      type="password"
                      name="senha-usuario"
                      value={"" || senha}
                      placeholder="Digite a nova senha..."
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
