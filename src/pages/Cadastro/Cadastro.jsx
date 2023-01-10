// CSS
import "./Cadastro.css";
// Component
import BackToHome from "../../components/BackToHome/BackToHome";
// React Router
import { Link } from "react-router-dom";
// React
import { useEffect, useState } from "react";
import { usePost } from "../../hooks/usePost";
// URL to POST
const url = "http://localhost:4200/newUser";

const Cadastro = () => {

    const [ nome, setNome ] = useState("");    
    const [ email, setEmail ] = useState("");    
    const [ senha, setSenha] = useState("");
    const [body, setBody] = useState([]);    

    const handleNome = (e) => {
        setNome(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleSenha = (e) => {
        setSenha(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setBody({
            nome,
            email,
            senha
        })

    };

    body == [] ? [] : usePost(url, body);
    
    return (
        <>

            <BackToHome />

            <main>

                <div className="container-cadastro">

                    <div className="caixa-cadastro">

                        <div className="container-conteudo-cadastro">
                            <h2 className="titulo-escrito-cadastro">Faça o seu cadastro!</h2>
                        </div>

                        <div className="container-formulario">

                            <form onSubmit={handleSubmit} className="formulario-cadastro">

                                <label>
                                    <input
                                    className="input-cadastro"
                                    type="text"
                                    name="nome-user"
                                    id="username"
                                    placeholder="Insira o seu nome de usuário..."
                                    onChange={handleNome}
                                    value={ nome || "" }
                                    />
                                </label>

                                <label>
                                    <input
                                    className="input-cadastro"
                                    type="email"
                                    name="email-user"
                                    id="emailUser"
                                    placeholder="Insira o seu email..."
                                    onChange={handleEmail}
                                    value={ email || "" } 
                                    />
                                </label>

                                <label>
                                    <input
                                    className="input-cadastro"
                                    type="password"
                                    name="senha-user"
                                    id="password"
                                    placeholder="Insira a sua senha..."
                                    onChange={handleSenha}
                                    value={ senha || "" }
                                    />
                                </label>

                                <div className="container-btn-cadastrar">
                                    <button className="btn-cadastro" type="submit">Cadastrar</button>
                                    <span className="span-link">Já possui cadastro? <Link to="/login" className="link-login" >Entrar</Link> </span>
                                </div>

                            </form>
                        </div>

                    </div>

                    </div>

            </main>
        </>
    );
};

export default Cadastro;