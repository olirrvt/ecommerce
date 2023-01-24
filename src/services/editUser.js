// Axios
import axios from "axios";

// Find User Email
const findUser = async () => {
    // Find User ID
    const email = localStorage.getItem("email");
    const url = `http://localhost:4000/usermail/${email}`;

    const res = await axios.get(url);

    return res;
}

const editUser = async (nome, email, senha) => {

    const resFunction = await findUser();
    const user = resFunction.data.usuario;

    // Usuario Existente  
    const idUser = user[0].id;

    console.log(nome, email, senha);

    // Dados Antigos
    const nomeUser = user[0].nome;
    const emailUser = user[0].email;
    const senhaUser = user[0].senha;

    // console.log(nomeUser, emailUser, senhaUser)

    const url = `http://localhost:4000/user/${idUser}`

    // axios.put(url, {
        
    // })
}

export default editUser;