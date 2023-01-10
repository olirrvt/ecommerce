// CSS
import "./Produtos.css";
// Components
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import Cabecalho from "../../components/Header/Cabecalho";
// Custom Hook
import { useGet } from "../../hooks/useGet";
// URL to FETCH
const url = "http://localhost:4200/products";

const Produtos = () => {

    const { dados: items } = useGet(url);

    return (
        <>
        <Cabecalho />

            <main>
                <div className="container-conteudo-produtos">

                    <div className="container-card-produtos">
                        <Card dados={items}/>
                    </div>
                </div>
            </main>

            <Footer/>
        </>
    );
};


export default Produtos;