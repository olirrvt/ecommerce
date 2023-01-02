import "./Home.css";
import Cabecalho from "../../components/Header/Cabecalho";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="conteudo">~

      <Cabecalho />

      <section className="banner-principal">
        <Banner />
      </section>

      <main>

        <div className="container-card">
            <Card />
            <Card />
            <Card />
        </div>

        <div className="container-card">
            <Card />
            <Card />
            <Card />
        </div>

      </main>

      <Footer />

    </div>
  );
};

export default Home;
