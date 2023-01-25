// Axios
import axios from "axios";

// Find User Email
const findUser = async () => {
  // Find User ID
  const email = localStorage.getItem("email");
  const url = `http://localhost:4000/usermail/${email}`;

  const res = await axios.get(url);

  return res;
};

const editUser = async (nome, email, senha) => {
  try {
    const resFunction = await findUser();
    const user = resFunction.data.usuario;

    // Usuario Existente
    const userId = user[0].id;
    // URL
    const url = `http://localhost:4000/user/${userId}`;

    // Filtro de Dados
    const nomeUser = nome || user[0].nome;
    const emailUser = email || user[0].email;
    const senhaUser = senha || user[0].senha;

    const data = {
      nomeUser,
      emailUser,
      senhaUser,
    };

    // Fetch Config

    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(res);
    return res;

  } catch(erro) {
    console.log(erro);
  }
};

export default editUser;
