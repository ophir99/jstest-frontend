import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import CreditcardSaga, { CreditCards } from "./sagas/Creditcard";
import Creditcard, { errorReducer } from "./reducers/Creditcard";

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const rootreducer = combineReducers({
  creditCard: Creditcard,
  error: errorReducer
});

const store = createStore(rootreducer, middleware);

export default store;

sagaMiddleware.run(CreditcardSaga);
sagaMiddleware.run(CreditCards);
