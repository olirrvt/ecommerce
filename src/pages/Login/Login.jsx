import "./Login.css";
import login from "../../assets/impressao-digital.png";
import BackToHome from "../../components/BackToHome/BackToHome";
;
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const [name, setName] = useState();
  const [senha, setSenha] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSenha = (e) => {
    setSenha(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Requisição e Validação
    setName("");
    setSenha("");
  };

  return (
      <>

       <BackToHome />

        <main>
          <div className="container-login">
            <div className="caixa-login">
              <div className="conteudo-login">
                <img className="login-icon" src={login} alt="icone-de-login" />
                <h3 className="titulo-login">Faça o seu Login</h3>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="formulario-login">
                  <label>
                    <input
                      className="input-name"
                      placeholder="Usuário"
                      type="text"
                      name="nome-user"
                      value={name || ''}
                      id="id-username"
                      onChange={handleName}
                    />
                  </label>

                  <label>
                    <input
                      className="input-senha"
                      placeholder="Senha"
                      type="password"
                      name="senha-user"
                      value={senha || ''}
                      id="id-userpassword"
                      onChange={handleSenha}
                    />
                  </label>

                  <div className="container-btn-login">
                  <input type="submit" value="Enviar" className="btn-login-formulario"></input>
                  <span className="span-link">Não tem cadastro? <Link to="/cadastro" className="link-cadastro">Cadastrar</Link></span>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </main>

      </>
  );
};

export default Login;
