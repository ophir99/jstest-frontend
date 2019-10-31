import React from "react";
import "./Grid.css";
import CreditCard from "../../Models/Creditcard";
export default class Grid extends React.Component<any> {
  componentDidUpdate() {}
  render() {
    return (
      <React.Fragment>
        <div className="grid">
          <div>Name</div>
          <div>Card Number</div>
          <div>Balance</div>
          <div>Limit</div>
        </div>
        {this.props.cards.map((el: CreditCard, i: number) => (
          <div className="grid" key={i}>
            <div>{el.name}</div>
            <div>{el.number}</div>
            <div>£ {el.balance}</div>
            <div>£ {el.limit}</div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
