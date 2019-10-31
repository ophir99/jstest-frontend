import React from "react";

import "./App.css";
import Form from "./../Form/Form";
import CreditCard from "../../Models/Creditcard";
import {
  getCreditCards,
  postCreditCard
} from "../../Store/actions/Creditcards";
import Grid from "../Grid/Grid";

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      creditcards: [],
      error: ""
    };
    this.props.store.subscribe(() => {
      this.setState({
        creditcards: this.props.store.getState().creditCard,
        error: this.props.store.getState().error
      });
    });
  }

  componentDidMount() {
    this.props.store.dispatch(getCreditCards());
  }

  addCard(card: CreditCard) {
    this.props.store.dispatch(postCreditCard(card));
  }

  renderCard() {
    if (this.state.creditcards.length > 0) {
      return <Grid cards={this.state.creditcards} />;
    } else {
      return <p className="msg"> No cards found</p>;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="heading">Credit Card System</div>
        <div>
          <Form addCard={this.addCard.bind(this)} error={this.state.error} />
          <br />
        </div>
        <div>{this.renderCard()}</div>
      </div>
    );
  }
}
