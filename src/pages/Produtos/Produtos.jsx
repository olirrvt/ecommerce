// CSS
import "./Produtos.css";
// Components
import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";
import BackToHome from "../../components/BackToHome/BackToHome";
// Custom Hook
import { useFetch } from "../../hooks/useFetch";
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
