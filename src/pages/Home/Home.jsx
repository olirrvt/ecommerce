import "./Home.css";
import Cabecalho from "../../components/Header/Cabecalho";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <div className="conteudo">

      <header>
        <Cabecalho />
      </header>

        <div className="banner-principal">
          <Banner />       
        </div>

      <section>
        <div>Página principal</div>
      </section>

    </div>
  );
};

export default Home;
