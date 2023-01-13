import "./CadastrarProduto.css";
// Componets
import BackToHome from "../../components/BackToHome/BackToHome";
// Assets
import comprando from "../../assets/troca.png"
// Footer
import Footer from "../../components/Footer/Footer"
import { useState } from "react";

const CadastrarProduto = () => {

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");

  const handleTitulo = (e) => {
    setTitulo(e.target.value);
  }

  const handleDescricao = (e) => {
    setDescricao(e.target.value);
  }

  const handleValor = (e) => {
    setValor(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const objProduto = {
      titulo,
      descricao,
      valor
    }

    console.log(objProduto)
  }

  return (
    <>
      <BackToHome />

      <main>
        <div className="container-cadastro-produto">
          <div className="caixa-form-produto">

            <form onSubmit={handleSubmit} className="formulario-produto">
              <label>
                Titulo do Produto:
                <input 
                className="input-titulo"
                name="titulo-do-produto" 
                id="titulo-produto" 
                type="text" 
                placeholder="Informe o titulo do produto..."
                onChange={handleTitulo}/>
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
                onChange={handleDescricao}>

                </textarea>
              </label>

              <label>
                Valor do produto:
                <input
                className="input-valor"
                name="valor-do-produto"
                id="valorProduto"
                type="number" 
                placeholder="Informe o valor do produto..."
                onChange={handleValor}/>
              </label>

              <button type="submit" className="btn-produto">
                Cadastrar Produto
              </button>
            </form>

            <div className="container-imagem">
              <img className="img-produto" src={comprando} alt="comprando-produto" />
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CadastrarProduto;
