import AppState from "./../../Models/Appstate";
import * as CreditCardActions from "./../actions/Creditcards";
import * as ErrorActions from "./../actions/Error";
const initialState: AppState = {
  creditCards: [],
  error: ""
};

export default function reducer(
  state: AppState | any = initialState.creditCards,
  action: any
) {
  switch (action.type) {
    case CreditCardActions.ADD_CREDIT_CARDS: {
      return [...action.payload];
    }
    case CreditCardActions.ADD_CREDIT_CARD: {
      const arr = [...state, action.payload];
      return [...arr];
    }

    default: {
      return state;
    }
  }
}

export function errorReducer(state: string = initialState.error, action: any) {
  switch (action.type) {
    case ErrorActions.API_ERROR: {
      return action.payload;
    }

    default:
      return "";
  }
}
