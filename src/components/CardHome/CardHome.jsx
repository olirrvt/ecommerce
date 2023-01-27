// CSS
import { useEffect, useState } from "react";
import "./CardHome.css";

const CardHome = (items) => {

  const [produto, setProduto] = useState([]);
  const [limitProd, setLimitProd] = useState([]);

  useEffect(() => {

    const prodArray = produto.map((prod) => {
        return prod;
    });

    const limitProd = prodArray.filter((prodFilt) => {
        return prodFilt.id <= 4;
    });

    setLimitProd(limitProd)

  }, [produto]);

  useEffect(() => {
    items.items == null ? null : setProduto(items.items.produto);
  }, [items]);

  return (
    <>
      <div className="container-card-home">
        { limitProd &&
          limitProd.map((prod) => (
            <div key={prod.id} className="card-home">
              <div className="card-home-header">
                <div className="anuncio-escrito">
                  <h4>23% OFF</h4>
                </div>
                <div className="promocao-escrito">
                  <h5>Summer Party</h5>
                </div>
              </div>

              <div className="card-home-body">
                <div>
                  <h2>{prod.titulo}</h2>
                </div>
              </div>

              <div className="card-home-footer">
                <div className="desc-prod">
                  {prod.descricao}
                </div>
                <div className="valor-prod">R$ {prod.valor} à vista</div>
                <div className="container-btn">
                  <button className="comprar-btn">Comprar</button>
                  <button className="carrinho-btn">Adicionar ao Carrinho</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CardHome;
