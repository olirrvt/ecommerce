import "./Login.css";
import login from "../../assets/impressao-digital.png";
import BackToHome from "../../components/BackToHome/BackToHome";
;
// import { useState, useEffect } from "react";

const Login = () => {
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
                <form className="formulario-login">
                  <input
                    className="input-name"
                    placeholder="Usuário"
                    type="text"
                    name="nome-user"
                    id="id-username"
                  />
                  <input
                    className="input-senha"
                    placeholder="Senha"
                    type="password"
                    name="senha-user"
                    id="id-userpassword"
                  />

                  <button className="btn-login-formulario">Entrar</button>
                </form>
              </div>
            </div>
          </div>
        </main>

      </>
  );
};

export default Login;
