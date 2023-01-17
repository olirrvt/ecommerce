import "./Home.css";
import Cabecalho from "../../components/Header/Cabecalho";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";

const Home = () => {

  // GET request
  const [resposta, setResposta] = useState(null);
  // INPUT value
  const [produto, setProduto] = useState("");
  // RESULTS
  const [found, setfound] = useState(false);

  // Produto Input
  const findProd = (produto) => {
    setProduto(produto);
  };

  // Encontrado
  const handleFound = (found) => {
    setfound(found);
  };

  // GET
  const handleRes = (resposta) => {
    setResposta(resposta);
  };

  useEffect(() => {
    console.log(produto);
    console.log(found);
  }, [produto, found]);

  return (
    <>
      <Cabecalho handleFound={handleFound} findProd={findProd} handleRes={handleRes} />

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
