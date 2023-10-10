import axios from "axios";
//const URL = "https://backpisassscript.herokuapp.com/";
const URL = "https://backpisassscript.onrender.com/";

const endpointPizzas = "pizzas";

export const getPizzas = async () => {
    try {
        const { data } = await axios.get(`${URL}${endpointPizzas}`);
        console.log(data)
        return data;
        
    } catch (error) {
        console.log(error);
        return [];
    }
}

getPizzas()