import "./Home.css";
import Cabecalho from "../../components/Header/Cabecalho";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

const Home = () => {
  return (
    <div className="conteudo">~

      <header>
        <Cabecalho />
      </header>

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

      <footer>
        <h1>Footer</h1>
      </footer>

    </div>
  );
};

export default Home;
