import axios from "axios";

// /ws/01001000/json/


const viacep = axios.create({
    baseURL:"https://viacep.com.br/ws/"
});

export default viacep;