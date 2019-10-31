import {
  call,
  takeEvery,
  put,
  delay,
  SimpleEffect,
  CallEffectDescriptor,
  PutEffectDescriptor
} from "redux-saga/effects";
import CreditCard from "./../api/Api";
import CAction from "../../Models/Action";
import { reportAPIError, dismissAPIError } from "../actions/Error";
function* createCard(
  action: CAction
): Generator<
  | SimpleEffect<"CALL", CallEffectDescriptor<unknown>>
  | SimpleEffect<"PUT", PutEffectDescriptor<{ type: string }>>
  | SimpleEffect<
      "PUT",
      PutEffectDescriptor<{
        type: string;
        payload: any;
      }>
    >,
  void,
  any
> {
  let card: any;
  try {
    card = yield call(CreditCard.create, action.payload);
    if (card.payload.saved) {
      yield put({ type: "ADD_CREDIT_CARD", payload: action.payload });
    } else {
      yield put(reportAPIError(card.payload.msg));
      yield delay(10000);
      yield put(dismissAPIError());
    }
  } catch (e) {
    yield put(reportAPIError("API-NETWORK"));
  }
}

export default function* Creditcard() {
  yield takeEvery("POST_CREDIT_CARD", createCard);
}

function* getAllCards() {
  let response: any;
  try {
    response = yield call(CreditCard.getAll);
    if (response.payload) {
      yield put({ type: "ADD_CREDIT_CARDS", payload: response.payload.data });
    }
  } catch (e) {
    yield put(reportAPIError("API-NETWORK"));
  }
}

export function* CreditCards() {
  yield takeEvery("GET_CREDIT_CARDS", getAllCards);
}
