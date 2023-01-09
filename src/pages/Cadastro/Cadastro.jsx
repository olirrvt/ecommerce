import "./Cadastro.css"
import BackToHome from "../../components/BackToHome/BackToHome";
import { Link } from "react-router-dom";

const Cadastro = () => {
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
                            <form className="formulario-cadastro">

                                <label>
                                    <input
                                    className="input-cadastro"
                                    type="text"
                                    name="nome-user"
                                    id="username"
                                    placeholder="Insira o seu nome de usuário..."
                                    />
                                </label>

                                <label>
                                    <input
                                    className="input-cadastro"
                                    type="email"
                                    name="email-user"
                                    id="emailUser"
                                    placeholder="Insira o seu email..."
                                    />
                                </label>

                                <label>
                                    <input
                                    className="input-cadastro"
                                    type="password"
                                    name="senha-user"
                                    id="password"
                                    placeholder="Insira a sua senha..."
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