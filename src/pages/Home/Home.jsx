// CSS
import "./Home.css";
// Components
import Cabecalho from "../../components/Header/Cabecalho";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import CardHome from "../../components/CardHome/CardHome";
// Custom Hook
import { useFetch } from "../../hooks/useFetch";
// React
import { useEffect, useState } from "react";
// URL
const url = "http://localhost:4000/products";


const Home = () => {

  const { dados: items, loading } = useFetch(url);

  return (
    <>
      <Cabecalho />

      <section className="banner-principal">
        <Banner />
      </section>

      <main>
        <div className="card-container-principal">
          <CardHome items={items} />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
