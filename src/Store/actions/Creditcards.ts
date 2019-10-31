import CreditCard from "./../../Models/Creditcard";

export const GET_CREDIT_CARDS = "GET_CREDIT_CARDS";
export const ADD_CREDIT_CARDS = "ADD_CREDIT_CARDS";
export const POST_CREDIT_CARD = "POST_CREDIT_CARD";
export const ADD_CREDIT_CARD = "ADD_CREDIT_CARD";

export const getCreditCards = () => ({
  type: GET_CREDIT_CARDS
});

export const addCreditCards = (payload: CreditCard[]) => ({
  type: ADD_CREDIT_CARDS,
  payload
});

export const postCreditCard = (payload: CreditCard) => ({
  type: POST_CREDIT_CARD,
  payload
});

export const addCreditCard = (payload: CreditCard) => ({
  type: ADD_CREDIT_CARD,
  payload
});
