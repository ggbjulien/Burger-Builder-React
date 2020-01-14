import React from "react";
import Aux from "../../../hoc/Aux";

import styles from "./OrderSummary.module.css";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span className={styles.Ingredients}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Your ingredients :</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout ?</p>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </Aux>
  );
};

export default OrderSummary;
