// CSS
import "./Cadastro.css";
// Component
import BackToHome from "../../components/BackToHome/BackToHome";
// React Router
import { Link } from "react-router-dom";
// React
import { useState } from "react";
// URL to POST
const url = "http://localhost:4000/newUser";

const Cadastro = () => {
  // Loading
  const [load, setLoad] = useState(false);
  // Valores do Input
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  // POST Reply
  const [resposta, setResposta] = useState(null);

  const handleNome = (e) => {
    // Validation
    setNome(e.target.value);
  };

  const handleEmail = (e) => {
    // Validation
    setEmail(e.target.value);
  };

  const handleSenha = (e) => {
    // Validation
    setSenha(e.target.value);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoad(true);

    // FORM em OBJETO
    const user = {
      nome,
      email,
      senha,
    }; 

    // Enviando Dados do Cadastro

    setLoad(true);

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((res) => {
          setResposta(res);
        });

    setLoad(false);

    // Esvaziando os Inputs 

    setNome("");
    setEmail("");
    setSenha("");

  };


  return (
    <>
      <BackToHome />

      <main>
        <div className="container-cadastro">
          <div className="caixa-cadastro">
            <div className="container-conteudo-cadastro">
              <h2 className="titulo-escrito-cadastro">Faça o seu cadastro!</h2>
            </div>

            <div className="container-formulario">

              <form onSubmit={handleSubmit} className="formulario-cadastro">
                <label>
                  <input
                    className="input-cadastro"
                    type="text"
                    name="nome-user"
                    id="username"
                    placeholder="Insira o seu nome de usuário..."
                    onChange={handleNome}
                    value={nome || ""}
                  />
                </label>

                <label>
                  <input
                    className="input-cadastro"
                    type="email"
                    name="email-user"
                    id="emailUser"
                    placeholder="Insira o seu email..."
                    onChange={handleEmail}
                    value={email || ""}
                  />
                </label>

                <label>
                  <input
                    className="input-cadastro"
                    type="password"
                    name="senha-user"
                    id="password"
                    placeholder="Insira a sua senha..."
                    onChange={handleSenha}
                    value={senha || ""}
                  />
                </label>

                {!load && (
                  <div className="container-btn-cadastrar">
                    <button className="btn-cadastro" type="submit">
                      Cadastrar
                    </button>
                    <span className="span-link">
                      Já possui cadastro?{" "}
                      <Link to="/login" className="link-login">
                        Entrar
                      </Link>{" "}
                    </span>
                  </div>
                )}
              </form>

            </div>
          </div>
        </div>

      </main>
    </>
  );
};

export default Cadastro;
