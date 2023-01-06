import "./BackToHome.css";
import logo from "../../assets/desenvolvedor.png";
import { Link } from "react-router-dom";

const BackToHome = () => {
  return (
    <div className="container-backhome">
      <Link className="link-home" to={"/"}>
        <div className="container-logo">
          <h2 className="titulo-header">TechCommerce</h2>
          <img src={logo} alt="logo-da-pagina" className="logo-da-pagina" />
        </div>
      </Link>
    </div>
  );
};

export default BackToHome;
