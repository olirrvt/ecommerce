// Attention, 👨‍💻 
// I'm using Axios and Fetch in the same application for studies.
import axios from "axios";

const loginService = async (email, senha) => {
    // URL
    const url = "http://localhost:4000/login";
    // Axios Req
    const res = await axios.post(url, {
        email, senha
    });

    return res;
};

export default loginService;