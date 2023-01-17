// Axios
import axios from "axios";
// Url
const url = "http://localhost:4000/products";

// Attention, 👨‍💻 
// I'm using Axios and Fetch in the same application for studies.

const findAllProducts = async () => {
    const res = await axios.get(url);
    return res;
};

export default findAllProducts;