// React
import { useEffect, useState } from "react";
// CSS
import "./Card.css";

const Card = (items) => {
  // GET ALL PRODUCTS

  const [produto, setProduto] = useState([]);

  useEffect(() => {
    items.dados == null ? null : setProduto(items.dados.produto);
  }, [items]);

  // FILTER PRODUCT

  // Pesquisar Produtos

  const [produtoInput, setProdutoInput] = useState("");
  const [researched, setResearched] = useState(false);

  const hdPesquisar = (e) => {
    setProdutoInput(e.target.value);
  };

  const hdSubmit = (e) => {
    e.preventDefault();
    findProduct();
  };

  // const filterProd = (produto) => {
  //   return produto
  // }

  const findProduct = () => {
    const produtoFilt = produto.filter((prod) => console.log(prod))
    console.log(produtoFilt)
    setResearched(true);
  };

  return (
    <>
      <div className="container-pesquisar">
        <form onSubmit={hdSubmit}>
          <label>
            <input
              className="input-pesquisar-header"
              type="text"
              placeholder="Pesquise aqui o produto que deseja..."
              name="input-pesquisar"
              onChange={hdPesquisar}
            />
          </label>
        </form>
      </div>

      {!researched ? (
        <div className="container-card-principal">
          {produto &&
            produto.map((prod) => (
              <div key={prod.id} className="card">
                <div className="div-card-body">
                  <div className="container-titulo-escrito">
                    <h3 className="titulo-produto">{prod.titulo}</h3>
                    <h4 className="preco-produto">R$ {prod.valor}</h4>
                  </div>

                  <div className="container-desc">
                    <h5>{prod.descricao}</h5>
                  </div>

                  <div className="container-btn">
                    <button className="btn-card-carrinho">
                      Adicionar ao carrinho
                    </button>
                    <button className="btn-card-comprar">Comprar</button>
                  </div>
                </div>
              </div>
            ))}
          ;
        </div>
      ) : (
        <div className="container-card-principal">
          {  }
          ;
        </div>
      )}
    </>
  );
};

export default Card;
