import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Login from "./pages/Login/Login";
import Produtos from './pages/Produtos/Produtos';

function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element = { Home } />
          <Route path="/cadastro" element = { Cadastro } />
          <Route path="/login" element = { Login } />
          <Route path="/produtos" element = { Produtos } />
      </Routes>
    </BrowserRouter>
  );
;}

export default App;
