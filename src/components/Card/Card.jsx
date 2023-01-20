// React
import { useEffect, useState } from "react";
// CSS
import "./Card.css";


const Card = (items) => {

  // GET ALL PRODUCTS

  const [produto, setProduto] = useState([]);
  const [prodFilt, setProdFilt] = useState([]);

  useEffect(() => {
    items.dados == null ? null : setProduto(items.dados.produto);
  }, [items]);

  useEffect(() => {

    const prodArray = produto.map((prod) => {
      return prod;
    });

    const prodLimit = prodArray.filter((prodFilt) => {
      return prodFilt.id <=4;
    });

    setProdFilt(prodLimit);
  }, [produto]);

  // FILTER PRODUCT
  const [produtoInput, setProdutoInput] = useState("");
  const [researched, setResearched] = useState(false);
  const [produtoUser, setProdutoUser] = useState(null);

  const hdPesquisar = (e) => {
    setProdutoInput(e.target.value);
    findProduct();
    if (e.target.value == "") {
      setResearched(false);
    }
  };

  const hdSubmit = (e) => {
    e.preventDefault();
  };

  const findProduct = () => {
    // Array dos Produtos
    const produtoArray = produto.map((prod) => {
      return prod;
    });

    // Produto Filtrado
    const produtoFilter = produtoArray.filter((prodFilter) =>
      prodFilter.titulo.toLowerCase().includes(produtoInput.toLowerCase())
    );

    setProdutoUser(produtoFilter);

    setResearched(true);
  };

  return (
    <>
      <div>
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
            {prodFilt &&
              prodFilt.map((prod) => (
                <div key={prod.id} className="card">
                  {/* <div className="card-header">
                    <img src="https://images.kabum.com.br/produtos/fotos/106897/placa-de-video-galax-nvidia-geforce-gtx-1660-super-1-click-oc-6gb-gddr6-60srl7dsy91s_placa-de-video-galax-nvidia-geforce-gtx-1660-super-1-click-oc-6gb-gddr6-60srl7dsy91s_1572446044_g.jpg" alt="" />
                  </div> */}

                  <div className="card-body">
                    <div className="titulo-produto">{prod.titulo}</div>
                    <div className="descricao-produto">{prod.descricao}</div>
                    <div className="valor-produto">
                      <span>Á vista</span>
                      R$ {prod.valor},00
                    </div>
                  </div>

                  <div className="card-footer">
                    <div className="cartao-produto">
                      <span>Em até 12x de </span>
                      R$ {(prod.valor / 12).toFixed(2)}
                    </div>
                    <span> sem juros no cartão</span>
                  </div>
                </div>
              ))}
            ;
          </div>
        ) : (
          <div className="container-card-principal">
            {produtoUser &&
              produtoUser.map((prod) => (
                <div key={prod.id} className="card">

                  {/* <div className="card-header">
                    <img src="https://images.kabum.com.br/produtos/fotos/106897/placa-de-video-galax-nvidia-geforce-gtx-1660-super-1-click-oc-6gb-gddr6-60srl7dsy91s_placa-de-video-galax-nvidia-geforce-gtx-1660-super-1-click-oc-6gb-gddr6-60srl7dsy91s_1572446044_g.jpg" alt="" />
                  </div> */}

                  <div className="card-body">
                    <div className="titulo-produto">{prod.titulo}</div>
                    <div className="descricao-produto">{prod.descricao}</div>
                    <div className="valor-produto">
                      <span>Á vista</span>
                      R$ {prod.valor},00
                    </div>
                  </div>

                  <div className="card-footer">
                    <div className="cartao-produto">
                      <span>Em até 12x de </span>
                      R$ {(prod.valor / 12).toFixed(2)}
                    </div>
                    <span> sem juros no cartão</span>
                  </div>
                </div>
              ))}
            ;
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
