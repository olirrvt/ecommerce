// Styles
import "./Usuario.css";
// Assets
import userLogado from "../../assets/user.png";
// Components
import BackToHome from "../../components/BackToHome/BackToHome";

const Usuario = () => {

  const userLocal = localStorage.getItem("nome");

  const user = localStorage.getItem("nome").charAt(0).toUpperCase() + userLocal.slice(1);

  return (
    <>

    <BackToHome />

    <main>

      <div className="container-perfil">

        <div className="caixa-usuario">

          <div className="perfil">
            <div className="area-user">
              <img className="user-logado" src={userLogado} alt="imagem-user" />
              <span>{user}</span>
            </div>

            <div className="menu-usuario">
              <span>Perfil</span>
              <span>Carrinho</span>
              <span>Meus produtos</span>
              <span>Sair da conta</span>
              <span>Apagar Perfil</span>
            </div>
          </div>

          <div className="editar">

            <div className="titulo-perfil">
              <h2>Perfil do Usuário</h2>
              <span>Edite suas informações de usuário</span>
            </div>

            <div className="container-dados">
              <form className="editar-dados">
                <label>
                  <input
                   className="input-editar" 
                   type="text"
                   name="nome-usuario"
                   placeholder="Digite o novo nome que deseja..." />
                </label>
                <label>
                  <input
                  className="input-editar" 
                  type="email"
                  name="email-usuario"
                  placeholder="Digite o novo e-mail que deseja..."/>
                </label>
                <label>
                  <input
                  className="input-editar" 
                  type="password"
                  name="senha-usuario"
                  placeholder="Digite a nova senha que deseja..."/>
                </label>
                <button className="btn-alterar">Alterar dados</button>
              </form>
            </div>

          </div>

        </div>

      </div>

    </main>

    </>
  );
};

export default Usuario;