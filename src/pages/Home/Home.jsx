import "./Home.css";
import Cabecalho from "../../components/Header/Cabecalho";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";

const Home = () => {

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

console.log(produtos);

  return (
    <>
      <Cabecalho />

      <section className="banner-principal">
        <Banner />
      </section>

      <main>
        <div className="container-card">
          <Card dataProduct={produtos} />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
