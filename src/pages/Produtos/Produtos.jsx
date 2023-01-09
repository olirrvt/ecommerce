import { useState, useEffect } from "react";
import "./Produtos.css";
import Pesquisar from "../../components/Pesquisar/Pesquisar"
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import Cabecalho from "../../components/Header/Cabecalho";

const Produtos = () => {

    const [produtos, setProdutos] = useState([]);

    // GET product
    const url = "http://localhost:4200/products";
  
    useEffect(() => {
      const getAllproduct = async () => {
        const res = await fetch(url);
        const dataProduct = await res.json();
        setProdutos(dataProduct.produto);
      };
  
      getAllproduct();
    },[]);

    return (
        <>
        <Cabecalho />

            <main>
                <div className="container-conteudo-produtos">

                    <div className="container-card-produtos">
                        <Card dados={produtos}/>
                    </div>
                </div>
            </main>

            <Footer/>
        </>
    );
};


export default Produtos;