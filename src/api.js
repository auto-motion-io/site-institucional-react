import axios from "axios";

const api = axios.create({
    baseURL: "http://54.210.19.210:80/api"
}); 

export default api;

const retornaCep = (cep) => {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}

export { retornaCep };