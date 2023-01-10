import "./Home.css";
import Cabecalho from "../../components/Header/Cabecalho";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";

const Home = () => {

  return (
    <>
      <Cabecalho />

      <section className="banner-principal">
        <Banner />
      </section>

      <main>
      </main>

      <Footer />
    </>
  );
};

export default Home;
