import axios from "axios";

const apiPorta = "5063";

//apiLocal recebe o endereco da API
const apiLocal = `http://localhost:${apiPorta}/api/`;

const api = axios.create({
    baseURL: apiLocal
});

export default api;