import "./CadastrarProduto.css";
// Componets
import BackToHome from "../../components/BackToHome/BackToHome";
// Assets
import comprando from "../../assets/troca.png"

const CadastrarProduto = () => {
  return (
    <>
      <BackToHome />

      <main>
        <div className="container-cadastro-produto">
          <div className="caixa-form-produto">

            <form className="formulario-produto">
              <label>
                Titulo do Produto:
                <input 
                className="input-titulo"
                name="" 
                id="" 
                type="text" 
                placeholder="Informe o titulo do produto..."/>
              </label>

              <label>
                Descrição do Produto:
                <textarea 
                className="input-descricao"
                name="" 
                id="" 
                cols="30" 
                rows="10"
                placeholder="Informe a descrição do produto...">

                </textarea>
              </label>

              <label>
                Valor do produto:
                <input
                className="input-valor"
                name=""
                id=""
                type="number" 
                placeholder="Informe o valor do produto..."/>
              </label>
            </form>

            <div className="container-imagem">
              <img className="img-produto" src={comprando} alt="comprando-produto" />
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default CadastrarProduto;
