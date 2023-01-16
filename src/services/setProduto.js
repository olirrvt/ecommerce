// Axios
import axios from "axios";
// URL
const url = "http://localhost:4000/newProduct";

// Attention, 👨‍💻 
// I'm using Axios and Fetch in the same application for studies.

const setProduto = async (titulo, descricao, valor) => {
    const res = await axios.post(url, {
        titulo,
        descricao,
        valor
    });

    return res;
};

export default setProduto;