// CSS
import "./Produtos.css";
// Components
import Card from "../../components/Card/Card";
import BackToHome from "../../components/BackToHome/BackToHome";
import Loading from "../../components/Loading/Loading";
// Custom Hook
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";
// URL to FETCH
const url = "http://localhost:4000/products";

const Produtos = () => {
  
  // Dados dos Produtos
  const { dados: items, loading } = useFetch(url);

  return (
    <>

      <BackToHome />

      <main>

        {loading ? (
          <Loading />
        ) : (
          <div className="container-conteudo-produtos">
            <div className="container-card-produtos">
              <Card dados={items} />
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Produtos;
