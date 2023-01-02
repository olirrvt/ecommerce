import "./Footer.css";
import github from "../../assets/github2.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <>
      <footer>

        <div className="container-footer">

          <div className="container-conteudo-principal">
            <h2 className="titulo-principal-footer">Website For Studies</h2>
          </div>

          <div>
             <div className="descricao-footer">
                <span> This site was made for studies and to carry out a challenge proposed </span>
                <span> by the institution Programadores do Amanhã. Visit my social networks or contact me. </span>
             </div>
          </div>

          <div className="container-sociais">
            <div className="icons-sociais">
                <a href="https://github.com/olirrvt"> <img className="icon-github" src={ github } alt="icon-github" /> </a>
                <a href="https://www.instagram.com/olirrvt_/"> <img className="icon-instagram" src={ instagram } alt="icon-instagram" /> </a>
                <a href="https://www.linkedin.com/in/taylor-oliveira-458384234/"> <img className="icon-linkedin" src={ linkedin } alt="icon-linkedin" /> </a>
            </div>
          </div>

          <div className="container-conteudo-secundario">
            <div>
            <a className="link-repository" href="https://github.com/olirrvt/ecommerce">Projeto Ecommerce </a>
              <span>Copyright ©2023</span>
            </div>

            <div>

            </div>
          </div>

        </div>

      </footer>
    </>
  );
};

export default Footer;
