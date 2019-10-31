import axios from "axios";
import CreditCard from "../../Models/Creditcard";

const URL = "http://localhost:8989/creditcards";

const API = {
  create: function createCreditCard(card: CreditCard) {
    return axios.post(`${URL}/new`, card).then(res => ({ payload: res.data }));
  },
  getAll: function createCreditCard() {
    return axios.get(`${URL}/all`).then(res => ({ payload: res.data }));
  }
};

export default API;
