// CSS
import "./Cabecalho.css";
// Componets
import ToUsuario from "../ToUsuario/ToUsuario";
import Nav from "../Nav/Nav";
import BackToHome from "../BackToHome/BackToHome";
// ReactRouter
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import findAllProducts from "../../services/searchProduto";

const Cabecalho = ({ findProd, handleRes }) => {

  // Search Product
  const [produtoInput, setProdutoInput] = useState("");  

  // Setando valor do produto
  const handleProduto = (e) => {
    setProdutoInput(e.target.value);
  };

  // Enviando para o Componente pai
  const handleSubmit = (e) => {
    e.preventDefault();
    findProd(produtoInput);
    findAllProducts().then((res) => {
      console.log(res);
    });
  }

  // Checking Login
  const [logado, setLogado] = useState(false);

  const authStorage = localStorage.getItem("logado");
  const authUser = authStorage === "true" ? true : false;

  useEffect(() => {
    authUser ? setLogado(true) : setLogado(false);
  }, [authUser]);

  return (
    <header>
      <div className="container-caixa-header">
        <div
          className={
            logado ? "container-header-logado" : "container-header-principal"
          }
        >
          <BackToHome />

          {!logado && (
            <div className="container-pesquisar">
              <form onSubmit={handleSubmit}>
                <label>
                  <input
                    className="input-pesquisar-header"
                    type="text"
                    placeholder="Pesquise aqui o produto que deseja..."
                    name="input-pesquisar"
                    onChange={handleProduto}
                  />
                </label>
              </form>
            </div>
          )}

          <div className="container-usuario">
            {!logado ? (
              <>
                {" "}
                <Link to="/login" className="btn-login">
                  Login
                </Link>
                <Link to="/cadastro" className="btn-cadastrar">
                  Cadastro
                </Link>
              </>
            ) : (
              <ToUsuario />
            )}
          </div>
        </div>

        <div>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Cabecalho;
