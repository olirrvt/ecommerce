import "./Card.css";
import produtoExemplo from "../../assets/computador-de-mesa.png";
import { useEffect, useState } from "react";

const Card = (produtos) => {
    
  console.log(produtos.dataProduct)

  return (
    <div className="container-card-principal">

        { produtos.dataProduct.map((prod) => (
                <div className="card">
                
                <div className="div-card-body">
        
                    <div className="container-titulo-escrito">
                        <h3 className="titulo-produto">{prod.titulo}</h3>
                        <h4 className="preco-produto">R$ {prod.valor}</h4>
                    </div>

                    <div className="container-desc">
                        <h5>{prod.descricao}</h5>
                    </div>
        
                    <div className="container-btn">
                        <button className="btn-card-carrinho">Adicionar ao carrinho</button>
                        <button className="btn-card-comprar">Comprar</button>
                    </div>
        
                </div>
        
              </div>
        ))};

    </div>
  );
};

export default Card;
