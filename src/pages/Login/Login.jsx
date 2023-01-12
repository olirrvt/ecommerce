// CSS
import "./Login.css";
// Assets
import iconLogin from "../../assets/impressao-digital.png";
// Components
import BackToHome from "../../components/BackToHome/BackToHome";

// Function Axios
import loginService from "../../services";
// React
import { useEffect, useState } from "react";
// React Router
import { Link, redirect } from "react-router-dom";

const Login = () => {
  // Input
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  // User
  const [usuario, setUsuario] = useState(null);
  const [resposta, setResposta] = useState(null);
  const [offline, setOffline] = useState(true);
  // Loading
  const [loading, setLoading] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSenha = (e) => {
    setSenha(e.target.value);
    console.log(senha);
  };

  const setLocalStorage = (usuario) => {
    console.log(usuario, resposta);
    localStorage.setItem("nome", usuario[0].nome);
    localStorage.setItem("email", usuario[0].email);
    localStorage.setItem("logado", resposta.logado);
    setOffline(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    loginService(email, senha).then((res) => {
      setResposta(res.data);
      setUsuario(res.data.usuario);
    });

    setLoading(false);

    setEmail("");
    setSenha("");
  };

  useEffect(() => {
    if (usuario) {
      resposta.logado ? setLocalStorage(usuario) : setOffline(true);
    }
  }, [resposta, usuario]);

  return (
    <>
      <BackToHome />

        <main>
          <div className="container-login">
            <div className="caixa-login">
              <div className="conteudo-login">
                <img
                  className="login-icon"
                  src={iconLogin}
                  alt="icone-de-login"
                />
                <h3 className="titulo-login">Faça o seu Login</h3>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="formulario-login">
                  <label>
                    <input
                      className="input-email"
                      placeholder="E-mail"
                      type="email"
                      name="email-user"
                      value={email || ""}
                      id="id-email"
                      onChange={handleEmail}
                    />
                  </label>

                  <label>
                    <input
                      className="input-senha"
                      placeholder="Senha"
                      type="password"
                      name="senha-user"
                      value={senha || ""}
                      id="id-userpassword"
                      onChange={handleSenha}
                    />
                  </label>

                  <div className="container-btn-login">
                    {loading && (
                      <input
                        value="Enviar"
                        className="btn-login-formulario"
                      ></input>
                    )}
                    {!loading && (
                      <input
                        type="submit"
                        value="Enviar"
                        className="btn-login-formulario"
                      ></input>
                    )}
                    <span className="span-link">
                      Não tem cadastro?{" "}
                      <Link to="/cadastro" className="link-cadastro">
                        Cadastrar
                      </Link>
                    </span>
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
