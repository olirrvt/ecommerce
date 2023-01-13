import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import Produtos from "./pages/Produtos/Produtos";
import CadastrarProduto from "./pages/CadastrarProduto/CadastrarProduto";
import Usuario from "./pages/Usuario/Usuario";
import Carrinho from "./pages/Carrinho/Carrinho";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/cadastrarProduto" element={<CadastrarProduto />} />
          <Route path="/usuario" element={<Usuario />}/>
          <Route path="/carrinho" element={<Carrinho />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
