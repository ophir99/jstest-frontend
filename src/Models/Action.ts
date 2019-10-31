import CreditCard from "./Creditcard";

export default interface CAction {
  type: "string";
  payload: CreditCard;
}
