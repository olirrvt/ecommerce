// Axios
import axios from "axios";
// URL
const url = "http://localhost:4000/login";

// Attention, 👨‍💻 
// I'm using Axios and Fetch in the same application for studies.

const loginService = async (email, senha) => {
    const res = await axios.post(url, {
        email, 
        senha
    });

    return res;
};

export default loginService;