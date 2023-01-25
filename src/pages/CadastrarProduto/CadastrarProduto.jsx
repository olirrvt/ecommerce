import "./CadastrarProduto.css";
// Componets
import BackToHome from "../../components/BackToHome/BackToHome";
// Footer
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import setProduto from "../../services/setProduto";
import { useEffect } from "react";

const CadastrarProduto = () => {

  // Produto
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  // Interação
  const [error, setError] = useState(false);
  const [added, setAdded] = useState(false);
  const [dados, setDados] = useState(null);

  const handleTitulo = (e) => {
    setTitulo(e.target.value);
    setAdded(false);
  };

  const handleDescricao = (e) => {
    setDescricao(e.target.value);
  };

  const handleValor = (e) => {
    setValor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setProduto(titulo, descricao, valor).then((res) => {
        setDados(res.data.produto);
        setAdded(true);
    });

    setTitulo("");
    setDescricao("");
    setValor("");
  };

  return (
    <>
      <BackToHome />

      <main>
        <div className="container-cadastro-produto">
          <div className="caixa-form-produto">
            
            { added && (
              <div className="container-mensagem">
                <span className="msg-produto"> Produto adicionado com sucesso!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="formulario-produto">
              <label>
                Titulo do Produto:
                <input
                  className="input-titulo"
                  name="titulo-do-produto"
                  id="titulo-produto"
                  type="text"
                  placeholder="Informe o titulo do produto..."
                  onChange={handleTitulo}
                  value={titulo || ""}
                />
              </label>

              <label>
                Descrição do Produto:
                <textarea
                  className="input-descricao"
                  name="descricao-produto"
                  id="descProduto"
                  cols="30"
                  rows="10"
                  placeholder="Informe a descrição do produto..."
                  onChange={handleDescricao}
                  value={descricao || ""}
                ></textarea>
              </label>

              <label>
                Valor do produto:
                <input
                  className="input-valor"
                  name="valor-do-produto"
                  id="valorProduto"
                  type="number"
                  placeholder="Informe o valor do produto..."
                  onChange={handleValor}
                  value={valor || ""}
                />
              </label>

              <button type="submit" className="btn-produto">
                Cadastrar Produto
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CadastrarProduto;
