// CSS
import "./Produtos.css";
// Components
import Card from "../../components/Card/Card";
import Cabecalho from "../../components/Header/Cabecalho";
import Loading from "../../components/Loading/Loading";
// Custom Hook
import { useFetch } from "../../hooks/useFetch";
// URL to FETCH
const url = "http://localhost:4000/products";

const Produtos = () => {
  const { dados: items, loading } = useFetch(url);

  return (
    <>
      <Cabecalho />

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
